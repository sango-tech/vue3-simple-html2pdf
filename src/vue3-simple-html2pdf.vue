<script>
/* eslint @typescript-eslint/no-var-requires: "off" */
const html2pdf = require('html2pdf.js')

import { h } from 'vue'

export default {
  props: {
    filename: {
      type: String,
      default: 'mypdf-file.pdf',
    },
    readyDownload: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default: {
        margin: 15,
        image: {
          type: 'jpeg',
          quality: 1,
        },
        html2canvas: { scale: 3 },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'p',
        },
      },
    },
  },
  data: function () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    download() {
      const el = document.getElementById('Vue3SimpleHtml2pdf')
      if (!el) {
        return
      }

      html2pdf().from(el).set(this.options).save(this.filename)
    },
  },
  render() {
    return h(
      'div',
      {
        class: 'vue3-simple-html2pdf',
        id: 'Vue3SimpleHtml2pdf',
      },
      this.$slots.default()[0]
    )
  },
}
</script>
<style>
.vue3-simple-html2pdf {
  position: relative;
}
.html2pdf__page-number {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
}
</style>
