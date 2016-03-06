# javascript-sidebar-scroll
JavaScript实现侧边栏滚动特效：右边文章可见区域高度 oarticleH 大于左边侧边栏可见区域高度 osidebarH 时触发 scrollEvent 事件。如果网页被卷去的高度 scrollH 加上屏幕可视化区域高度 screenH 大于左边侧边栏可见区域高度 osidebarH ，左边侧边栏 osidebar 固定（属性 position 的属性值置为 fixed），若滚动到右边文章底部，左边侧边栏 osidebar 不固定（属性 position 的属性值置为 absolute）。
