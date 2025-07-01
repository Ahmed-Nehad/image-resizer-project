      // // Add event listener to load images when page loads
      // document.addEventListener("DOMContentLoaded", () => {
      //   fetch("/api/images")
      //     .then((res) => {
      //       if (!res.ok) {
      //         throw new Error(`HTTP error! status: ${res.status}`);
      //       }
      //       return res.json();
      //     })
      //     .then((imagePaths) => {
      //         console.log("Received images:", imagePaths); // Debug log
      //         const gallery = document.getElementById("gallery");
      //       gallery.innerHTML = ""; // Clear existing content

      //       if (imagePaths && imagePaths.length > 0) {
      //         imagePaths.forEach(function(path) {
      //           const img = document.createElement('img');
      //           img.src = path;
      //           img.alt = 'Gallery image';
      //           img.addEventListener('click', () => {
      //               fetch('/resizeOnClick', {
      //                 method: 'POST',
      //                 body: path
      //               });
      //               console.log('Image clicked:', path);
      //           });
                
      //           gallery.appendChild(img);
      //         });
      //       } else {
      //         gallery.innerHTML = "<p>No images available</p>";
      //       }
      //     })
      //     .catch((error) => {
      //       console.error("Error:", error);
      //       document.getElementById("gallery").innerHTML ="<p>Error loading images</p>";
      //     });
      //   });