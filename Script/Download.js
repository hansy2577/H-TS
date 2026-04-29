function downloadFile(data, filename, type = 'text/plain') {
      try {
        const blob = new Blob([data], { type });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url); // Cleanup memory
      } catch (err) {
        console.error("Download failed:", err);
      }
}

const content = "yo";
downloadFile(content, "example.txt");
