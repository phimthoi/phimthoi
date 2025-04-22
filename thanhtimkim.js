//thanh tim kiem
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const suggestionsList = document.getElementById("suggestionsList");
  
    // Danh sách phim mẫu
    const movies = [
      { name: "Thế Giới Hoàn Mỹ", image: "anhmoi/thegoihoanmy.jpg", link: "khinhanvaophim.html" },
      { name: "Già Thiên", image: "anhmoi/giathien.jpg", link: "khinhanvaophim.html" },
      { name: "Đấu Phá Thương Khung", image: "anhmoi/dauphathuongkhung.jpg", link: "khinhanvaophim.html" },
      { name: "Luyện khí mười vạn năm", image: "anhmoi/luyenkhimuoivannam.jpg", link: "khinhanvaophim.html" },
      { name: "Tiên Nghịch", image: "anhmoi/tiennghich.jpg", link: "khinhanvaophim.html" },
      { name: "Thương Nguyên Đồ", image: "anhmoi/thuongnguyendo.jpg", link: "khinhanvaophim.html" },
      { name: "Thai cổ Chiến Hồn", image: "anhmoi/thaicochienhon.jpg", link: "khinhanvaophim.html" },
      { name: "Mục Thần Ký", image: "anhmoi/mucthanky.jpg", link: "khinhanvaophim.html" }
      // Thêm phim
    ];
  
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      suggestionsList.innerHTML = "";
  
      if (query.length === 0) {
        suggestionsList.style.display = "none";
        return;
      }
  
      const matchedMovies = movies.filter((movie) =>
        movie.name.toLowerCase().includes(query)
      );
  
      if (matchedMovies.length === 0) {
        suggestionsList.style.display = "none";
        return;
      }
  
      matchedMovies.forEach((movie) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <a href="${movie.link}" style="display: flex; align-items: center; gap: 10px; text-decoration: none;">
            <img src="${movie.image}" alt="${movie.name}" style="width: 50px; height: 60px; object-fit: cover; border-radius: 4px;">
            <span style="color: white;">${movie.name}</span>
          </a>
        `;
        suggestionsList.appendChild(li);
      });
  
      suggestionsList.style.display = "block";
    });
  
    // Ẩn gợi ý khi click ra ngoài
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".timkim")) {
        suggestionsList.style.display = "none";
      }
    });
  });
 