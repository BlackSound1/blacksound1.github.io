'use client';

import { PDFViewer, ZoomMode } from '@embedpdf/react-pdf-viewer';
import { ReactElement } from 'react';

interface PDF_Props {
  file: string;
}

/**
 * A viewer for a single PDF. Has many options disabled for safety/ ease of use.
 * @param file The PDF file to load.
 * @returns A PDF_Viewer element with the `file` loaded.
 */
export default function PDF_Viewer({ file }: PDF_Props): ReactElement {
  return (
    <div className="h-[600px] w-full overflow-hidden rounded-xl border border-gray-300 shadow-lg dark:border-gray-600">
      <PDFViewer
        config={{
          src: file,
          tabBar: 'never',
          zoom: {
            defaultZoomLevel: ZoomMode.FitWidth,
          },
          disabledCategories: ['annotation', 'redaction', 'document', 'panel-comment', 'page'],
        }}
        style={{ height: '100%' }}
      />
    </div>
  );
}
