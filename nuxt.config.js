export default {
    mode: "spa",
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [
        "element-ui/lib/theme-chalk/index.css",
        "@/assets/css/main.css",
        "@/assets/css/font-awesome-4.7.0/css/font-awesome.min.css"
    ],
    /*
     ** Plugins to load before mounting the App
     */
    // plugins: ["@/plugins/element-ui", { src: '@/plugins/mock/mock-server', ssr: true }],
    plugins: ["@/plugins/element-ui"],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** Build configuration
     */
    build: {
        transpile: ['/^element-ui/', 'vue-echarts', 'resize-detector'],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {

            if (ctx.isDev && ctx.isClient) {
                //console.log("if dev")
                // config.devServer = {
                //     before: require('./mock/mock-server.js')
                // }
            } else {
                //console.log("else product");
            }
        }
    }
};
