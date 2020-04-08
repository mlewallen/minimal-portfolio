<template>
  <nav>
    <router-link v-for="item in menuItems" :key="item.title" :to="item.route" class="nav-item">
      <div class="icon">
        <i :class="item.icon"></i>
        <span class="title">{{ item.title }}</span>
      </div>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
  data: () => {
    return {
      menuItems: [
        { title: 'Home', route: '/', icon: 'uil uil-home' },
        { title: 'Work', route: '/', icon: 'uil uil-cube' },
        { title: 'Blog', route: '/about', icon: 'uil uil-document-layout-left' },
        // { title: 'Contact', route: '/', icon: 'uil uil-envelope-add' },
        { title: 'More', route: '/', icon: 'uil uil-ellipsis-h' },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../theme/index.scss';

nav {
  position: fixed;
  z-index: 1001;
	bottom: 0;
	// max-width: 600px;
	width: 100%;
	box-sizing: border-box;
	padding: 8px 16px 24px;
	background: $--color-white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px -6px 8px -1px rgba(37,44,54,0.08);
	
	.nav-item {
		text-decoration: none;
		width: 64px;
		
		&:hover {
			.icon {
        color: $--color-primary;

				.title {
					color: $--color-text-secondary;
          opacity: 1;
        }
      }
    }

    &.router-link-exact-active {
      .icon {
        color: $--color-primary;
        .title {
          color: $--color-primary;
          opacity: 1;
        }
      }
    }
	
		.icon  {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: $--color-text-primary;
			transition: $--transition-default;

			i {
        font-size: 24px;
      }

			.title {
				font-size: 12px;
				opacity: .6;
				transition: $--transition-default;
        text-decoration: none;
      }
    }
  }
}
</style>