<template>
  <div>
    <BlogNav :siteHeaderData="siteHeader"></BlogNav>

    <slot />
    <!-- footer -->
    <footer class="border-top">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="#!">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <div class="small text-center text-muted fst-italic">
              <span> Copyright &copy; XiaoXiaoQian Website 2022 </span>
              <div class="flex items-center">
                <div style="margin: 0 auto; padding: 20px 0">
                  <a
                    target="_blank"
                    href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502009690"
                    style="
                      display: inline-block;
                      text-decoration: none;
                      height: 20px;
                      line-height: 20px;
                    "
                    ><img :src="icpImg" style="float: left" />
                    <p
                      style="
                        float: left;
                        height: 20px;
                        line-height: 20px;
                        margin: 0px 0px 0px 5px;
                        color: #939393;
                      "
                    >
                      粤公网安备 44030502009690号
                    </p>
                    <a
                      href="https://beian.miit.gov.cn/"
                      class="text-muted ml-4"
                      target="_blank"
                      >粤ICP备2022137710号-1</a
                    >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts"></script>
<script setup lang="ts">
import icpImg from "@/assets/img/icp.png";
import { blogGlobalQurey } from "../graphql/blogGlobal";

const { data } = await useAsyncQuery(blogGlobalQurey);
const unRefGlobalData = unref(data);

const {
  global: {
    data: {
      attributes: { siteHeader, footer },
    },
  },
} = unRefGlobalData;
</script>
