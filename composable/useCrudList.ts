import { ref, computed, onMounted } from "vue";


export function useCrudList<T>(options: {
  fetchUrl: string;
  deleteUrl: (id: number | string) => string;
  getParams?: (search: string) => any;
  filterFn?: (item: T, keyword: string) => boolean;
  getToken?: () => string | null;
}) {
  const items = ref<T[]>([]);
  const selectedItem = ref<T | null>(null);
  const showModal = ref(false);
  const search = ref("");

  // Dữ liệu sau khi lọc theo search
  const filteredItems = computed(() => {
    if (!search.value) return items.value;

    return items.value.filter(item => {
      if (options.filterFn) {
        return options.filterFn(item as T, search.value);
      }

      // Mặc định: thử convert sang JSON string để search
      return JSON.stringify(item)
        .toLowerCase()
        .includes(search.value.toLowerCase());
    });
  });
  
  const fetchItems = async () => {
    try {
      const params = options.getParams ? options.getParams(search.value) : {};
      const token = options.getToken?.();
      const res = await $fetch(options.fetchUrl, { params, headers:{Authorization : `Bearer ${token}`}});
      items.value = res as T[];
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu", error);
    }
  };

  const editItem = (item: T) => {
    selectedItem.value = item;
    showModal.value = true;
  };

  const deleteItem = async (id: number | string) => {
    await $fetch(options.deleteUrl(id), {
      method: "DELETE",
    });
    fetchItems();
  };

  onMounted(() => {
    fetchItems();
  });

  return {
    items: filteredItems,
    rawItems: items, // Nếu cần lấy dữ liệu gốc không lọc
    selectedItem,
    showModal,
    fetchItems,
    editItem,
    deleteItem,
    search,
  };
}
