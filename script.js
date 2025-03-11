function printImage() {
    const imgSrc = document.getElementById("imageModal").dataset.imageSrc;
    const printWindow = window.open("", "_blank");
    
    printWindow.document.write(`<html><head><title>Print Image</title></head><body style="text-align:center;">`);
    printWindow.document.write(`<img src="${imgSrc}" style="max-width:100%; height:auto;"/>`);
    printWindow.document.write(`<script>window.onload = function() { window.print(); window.close(); }</script>`);
    printWindow.document.write(`</body></html>`);
    printWindow.document.close();
}