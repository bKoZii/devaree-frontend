<template>
  <div class="jun-layout">
    <header class="jun-header jun-header-h-[fit-content]">
      <MainHeader />
    </header>
    <main class="jun-content mb-10 px-2">
      <slot />
    </main>
    <footer class="jun-footer">
      <MainFooter class="jun-insetAvoidingView" />
    </footer>
    <nav class="block sm:hidden">
      <BottomNavbar />
    </nav>
  </div>
</template>
