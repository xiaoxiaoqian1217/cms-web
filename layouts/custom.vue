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
              <span
                ><a href="https://beian.miit.gov.cn/" target="_blank"
                  >粤ICP备2022137710号-1</a
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts"></script>
<script setup lang="ts">
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
