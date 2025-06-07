
const upload = document.getElementById("upload");
const gallery = document.getElementById("gallery");

if (upload) {
  upload.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const url = URL.createObjectURL(file);
      const isImage = file.type.startsWith("image");
      const media = document.createElement(isImage ? "img" : "video");
      media.src = url;
      if (!isImage) media.controls = true;
      media.onclick = () => {
        const modal = document.createElement("div");
        modal.style.position = "fixed";
        modal.style.top = "0";
        modal.style.left = "0";
        modal.style.width = "100%";
        modal.style.height = "100%";
        modal.style.background = "rgba(0,0,0,0.8)";
        modal.style.display = "flex";
        modal.style.alignItems = "center";
        modal.style.justifyContent = "center";
        modal.onclick = () => modal.remove();
        const full = document.createElement(isImage ? "img" : "video");
        full.src = url;
        full.style.maxWidth = "90%";
        full.style.maxHeight = "90%";
        if (!isImage) full.controls = true;
        modal.appendChild(full);
        document.body.appendChild(modal);
      };
      const wrapper = document.createElement("div");
      wrapper.style.position = "relative";
      const del = document.createElement("span");
      del.innerHTML = "🗑️";
      del.style.position = "absolute";
      del.style.top = "0";
      del.style.right = "0";
      del.style.cursor = "pointer";
      del.onclick = () => {
        if (confirm("Silmek istediğinize emin misiniz?")) {
          wrapper.remove();
        }
      };
      wrapper.appendChild(media);
      wrapper.appendChild(del);
      gallery.appendChild(wrapper);
    });
  });
}
