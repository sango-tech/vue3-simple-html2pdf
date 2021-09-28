const jsPDF = require('jspdf')
const download = require('downloadjs')

import { PDFDocument } from 'pdf-lib'

export async function exportPDF(pdfBlobs: Blob[], filename: string) {
    const newPdf = await PDFDocument.create()
    for (const blob of pdfBlobs) {
        const buffers = await blob.arrayBuffer()
        const pdfDoc = await PDFDocument.load(buffers)
        const copiedPages = await newPdf.copyPages(pdfDoc, pdfDoc.getPageIndices())

        copiedPages.forEach((page) => {
            newPdf.addPage(page)
        })
    }

    const pdfBytes = await newPdf.save()
    download(pdfBytes, filename, 'application/pdf')
}
