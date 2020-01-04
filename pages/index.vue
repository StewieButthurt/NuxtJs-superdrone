<template>
  <div>
    <app-main />
    <app-super-light-drone />
    <app-player />
    <app-super-services />
    <app-worlds-first />
    <app-mount-to-anything />
    <app-best-drones />
    <app-footer />
  </div>
</template>

<script>
  // компонент будет загружен только по запросу (Отложенная загрузка компонентов)
  const AppMain = () => import('~/components/main')
  const AppSuperLightDrone = () => import('~/components/super-light-drone')
  const AppPlayer = () => import('~/components/player')
  const AppSuperServices = () => import('~/components/super-services')
  const AppWorldsFirst = () => import('~/components/worlds-first')
  const AppMountToAnything = () => import('~/components/mount-to-anything')
  const AppBestDrones = () => import('~/components/best-drones')
  const AppFooter = () => import('~/components/footer')



  export default {
    components: {
      AppMain,
      AppSuperLightDrone,
      AppPlayer,
      AppSuperServices,
      AppWorldsFirst,
      AppMountToAnything,
      AppBestDrones,
      AppFooter
    },
    async asyncData({store, error}) {
      try {
        const products = await store.dispatch('localStorage/fetchProducts')
        return {products}
      } catch(e) {
        error(e)
      }
    }
  }
</script>

<style>
  
 </style>
