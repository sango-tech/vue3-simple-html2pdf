import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify-es'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import replace from 'rollup-plugin-replace'
import json from 'rollup-plugin-json'

export default {
    entry: `src/index.js`,
    dest: `dist/vue-html2pdf.js`,
    format: 'amd',
    moduleName: 'VueHtml2pdf',
    plugins: [
        json(),
        vue({
            css: true
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify( 'production' )
        }),
        resolve({
            browser: true,
            extensions: ['.vue', '.js', '.json']
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**'
          }),
        uglify()
    ],
    external: ['vue','html2pdf'],
    sourceMap: false
}
