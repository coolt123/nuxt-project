<template v-show="isAntdReady">
  <h2>Danh sách</h2>
  <a-table :data-source="data" :columns="columns"  >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'title'">
        <span style="color: #1890ff">Title</span>
      </template>
    </template>
    <template
      #customFilterDropdown="{
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        column,
      }"
    >
      <div style="padding: 8px">
        <a-input
          ref="searchInput"
          :placeholder="`Search ${column.dataIndex}`"
          :value="selectedKeys[0]"
          style="width: 188px; margin-bottom: 8px; display: block"
          @change="
            (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
          "
          @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
        />
        <a-button
          type="primary"
          size="small"
          style="width: 90px; margin-right: 8px"
          @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
        >
          <template #icon><SearchOutlined /></template>
          Search
        </a-button>
        <a-button
          size="small"
          style="width: 90px"
          @click="handleReset(clearFilters)"
        >
          Reset
        </a-button>
      </div>
    </template>
    <template #customFilterIcon="{ filtered }">
      <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
    </template>
    <template #bodyCell="{ text, column }">
      
      <span
        v-if="state.searchText && state.searchedColumn === column.dataIndex"
      >
      <span v-if="column.key === 'image'">
        <img :src="text" alt="book-image" style="width: 50px; height: 70px; object-fit: cover;" />
      </span>
      
        <template
          v-for="(fragment, i) in text
            .toString()
            .split(
              new RegExp(
                `(?<=${state.searchText})|(?=${state.searchText})`,
                'i'
              )
            )"
        >
          <mark
            v-if="fragment.toLowerCase() === state.searchText.toLowerCase()"
            :key="i"
            class="highlight"
          >
            {{ fragment }}
          </mark>
          <template v-else>{{ fragment }}</template>
        </template>
        
      </span>
    </template>
  </a-table>
</template>
<script  setup>
import { SearchOutlined } from "@ant-design/icons-vue";
import { reactive, ref, render } from "vue";
const data = [
  {
    key: "1",
    title: "Đắc Nhân Tâm",
    genre: "Kỹ năng sống",
    publisher: "NXB Tổng hợp TP.HCM",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "2",
    title: "Nhà Giả Kim",
    genre: "Tiểu thuyết",
    publisher: "NXB Lao Động",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "3",
    title: "Muôn Kiếp Nhân Sinh",
    genre: "Tâm linh",
    publisher: "NXB First News",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "4",
    title: "Bí Mật Của May Mắn",
    genre: "Tư duy - Triết học",
    publisher: "NXB Trẻ",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "5",
    title: "Quẳng Gánh Lo Đi Và Vui Sống",
    genre: "Kỹ năng sống",
    publisher: "NXB Trẻ",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "6",
    title: "Những Tấm Lòng Cao Cả",
    genre: "Văn học",
    publisher: "NXB Kim Đồng",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "7",
    title: "Không Gia Đình",
    genre: "Văn học",
    publisher: "NXB Văn Học",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "8",
    title: "Hai Số Phận",
    genre: "Tiểu thuyết",
    publisher: "NXB Văn Học",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "9",
    title: "Cà Phê Cùng Tony",
    genre: "Tản văn",
    publisher: "NXB Trẻ",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "10",
    title: "Dám Nghĩ Lớn",
    genre: "Kinh doanh",
    publisher: "NXB Trẻ",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "11",
    title: "Tư Duy Nhanh Và Chậm",
    genre: "Tư duy",
    publisher: "NXB Lao Động",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "12",
    title: "Bố Già",
    genre: "Tiểu thuyết",
    publisher: "NXB Văn Học",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "13",
    title: "Tôi Thấy Hoa Vàng Trên Cỏ Xanh",
    genre: "Tiểu thuyết",
    publisher: "NXB Trẻ",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "14",
    title: "Harry Potter và Hòn Đá Phù Thủy",
    genre: "Fantasy",
    publisher: "NXB Trẻ",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "15",
    title: "Thép Đã Tôi Thế Đấy",
    genre: "Tiểu thuyết",
    publisher: "NXB Kim Đồng",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "16",
    title: "Hành Trình Về Phương Đông",
    genre: "Tâm linh",
    publisher: "NXB Văn Học",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "17",
    title: "Dạy Con Làm Giàu",
    genre: "Kinh doanh",
    publisher: "NXB Trẻ",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "18",
    title: "Những Người Khốn Khổ",
    genre: "Tiểu thuyết",
    publisher: "NXB Văn Học",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "19",
    title: "Hoàng Tử Bé",
    genre: "Văn học thiếu nhi",
    publisher: "NXB Kim Đồng",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "20",
    title: "Đi Tìm Lẽ Sống",
    genre: "Tư duy",
    publisher: "NXB Tổng hợp TP.HCM",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "21",
    title: "Sherlock Holmes Toàn Tập",
    genre: "Trinh thám",
    publisher: "NXB Văn Học",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "22",
    title: "Sức Mạnh Của Hiện Tại",
    genre: "Phát triển bản thân",
    publisher: "NXB Lao Động",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "23",
    title: "Cuộc Sống Không Giới Hạn",
    genre: "Tạo động lực",
    publisher: "NXB Trẻ",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "24",
    title: "Đọc Vị Bất Kỳ Ai",
    genre: "Tâm lý học",
    publisher: "NXB Tổng hợp TP.HCM",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "25",
    title: "Chuyện Con Mèo Dạy Hải Âu Bay",
    genre: "Thiếu nhi",
    publisher: "NXB Trẻ",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "26",
    title: "Thay Đổi Cuộc Sống Với Nhân Số Học",
    genre: "Tâm linh",
    publisher: "NXB Tổng hợp TP.HCM",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "27",
    title: "Kẻ Trộm Sách",
    genre: "Tiểu thuyết",
    publisher: "NXB Văn Học",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "28",
    title: "Sống Như Người Nhật",
    genre: "Phát triển bản thân",
    publisher: "NXB Trẻ",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "29",
    title: "Tâm Lý Học Đám Đông",
    genre: "Tâm lý học",
    publisher: "NXB Tổng hợp TP.HCM",
    image: "https://via.placeholder.com/50",
  },
  {
    key: "30",
    title: "Thức Tỉnh Mục Đích Sống",
    genre: "Tâm linh",
    publisher: "NXB Lao Động",
    image: "https://via.placeholder.com/50",
  },
];

const state = reactive({
  searchText: "",
  searchedColumn: "",
});
const isAntdReady = ref(false);
onMounted(() => {   
  setTimeout(() => {
    isAntdReady.value = true; 
  }, 300);
   
});
const searchInput = ref();

const columns = [
  {
    title: "Name",
    dataIndex: "title",
    key: "title",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.title.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },
  {
    title: "Genre",
    dataIndex: "genre",
    key: "genre",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.genre.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },
  {
    title: "Publisher",
    dataIndex: "publisher",
    key: "publisher",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.publisher.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (text) => {
      return h('img', {
        src: text,
        alt: 'book-image',
        style: 'width: 50px; height: 70px; object-fit: cover;'
      });
    }
   
  },
];

const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm();
  state.searchText = selectedKeys[0];
  state.searchedColumn = dataIndex;
};

const handleReset = (clearFilters) => {
  clearFilters({ confirm: true });
  state.searchText = "";
};
</script>
<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>
