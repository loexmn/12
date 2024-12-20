<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Pilih semua gambar di dalam elemen dengan kelas 'post-body'
    var images = document.querySelectorAll('.post-body img');

    // Ubah ukuran setiap gambar menjadi w700xh360 dan tambahkan border serta efek
    images.forEach(function(image) {
      image.style.width = '450px';
      image.style.height = '200px';
      image.style.objectFit = 'cover';  // Menggunakan cover agar gambar tetap proporsional tanpa distorsi
      image.style.border = '10px solid #fff';
      image.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      image.style.borderRadius = '15px';
      image.style.transition = 'transform 0.3s, box-shadow 0.3s';
      
      // Tambahkan efek hover
      image.addEventListener('mouseover', function() {
        image.style.transform = 'scale(1.05)';
        image.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
      });

      // Hapus efek hover saat mouse keluar dari gambar
      image.addEventListener('mouseout', function() {
        image.style.transform = 'scale(1)';
        image.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      });
    });
  });

  // Tambahkan event listener untuk memantau penambahan gambar baru di dalam posting
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length > 0) {
        for (var i = 0; i < mutation.addedNodes.length; i++) {
          var node = mutation.addedNodes[i];
          if (node.tagName === 'IMG' && node.closest('.post-body')) {
            node.style.width = '700px';
            node.style.height = '360px';
            node.style.objectFit = 'cover';  // Menggunakan cover agar gambar tetap proporsional tanpa distorsi
            node.style.border = '10px solid #fff';
            node.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            node.style.borderRadius = '15px';
            node.style.transition = 'transform 0.3s, box-shadow 0.3s';
            
            // Tambahkan efek hover
            node.addEventListener('mouseover', function() {
              node.style.transform = 'scale(1.05)';
              node.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            });

            // Hapus efek hover saat mouse keluar dari gambar
            node.addEventListener('mouseout', function() {
              node.style.transform = 'scale(1)';
              node.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            });
          } else if (node.getElementsByTagName && node.closest('.post-body')) {
            var newImages = node.getElementsByTagName('img');
            for (var j = 0; j < newImages.length; j++) {
              newImages[j].style.width = '700px';
              newImages[j].style.height = '360px';
              newImages[j].style.objectFit = 'cover';  // Menggunakan cover agar gambar tetap proporsional tanpa distorsi
              newImages[j].style.border = '10px solid #fff';
              newImages[j].style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
              newImages[j].style.borderRadius = '15px';
              newImages[j].style.transition = 'transform 0.3s, box-shadow 0.3s';
              
              // Tambahkan efek hover
              newImages[j].addEventListener('mouseover', function() {
                newImages[j].style.transform = 'scale(1.05)';
                newImages[j].style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
              });

              // Hapus efek hover saat mouse keluar dari gambar
              newImages[j].addEventListener('mouseout', function() {
                newImages[j].style.transform = 'scale(1)';
                newImages[j].style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
              });
            }
          }
        }
      }
    });
  });

  // Pantau perubahan di dalam elemen dengan kelas 'post-body'
  var postBodies = document.querySelectorAll('.post-body');
  postBodies.forEach(function(postBody) {
    observer.observe(postBody, {
      childList: true,
      subtree: true
    });
  });
</script>