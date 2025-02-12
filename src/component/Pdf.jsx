import React, { useState } from 'react';

function PDFViewer() {
  const [showPDF, setShowPDF] = useState(false);
  const pdfUrl = '..\assets\Syllabus.pdf'; // Replace with the actual path

  return (
    <div>
      <button onClick={() => setShowPDF(true)}>Show PDF</button>
      {showPDF && (
        <iframe src={pdfUrl} width="100%" height="500px" title="PDF Viewer" />
      )}
    </div>
  );
}

export default PDFViewer;