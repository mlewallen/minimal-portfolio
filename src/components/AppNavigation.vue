<template>
  <nav class="app-navigation">
    <div class="nav-container">
      <router-link v-for="item in menuItems" :key="item.title" :to="item.route" class="nav-item">
        <div class="icon">
          <i :class="item.icon"></i>
          <span class="title">{{ item.title }}</span>
        </div>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
  data: () => {
    return {
      menuItems: [
        { title: 'Home', route: '/', icon: 'uil uil-home-alt' },
        { title: 'About', route: '/about', icon: 'uil uil-user-circle' },
        { title: 'Work', route: '/work', icon: 'uil uil-cube' },
        { title: 'Blog', route: '/blog', icon: 'uil uil-document-layout-left' },
        // { title: 'More', route: '#more', icon: 'uil uil-ellipsis-h' },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../theme/index.scss';

.app-navigation {
  position: fixed;
  z-index: 1001;
	bottom: 0;
	width: 100%;
	box-sizing: border-box;
	padding: 8px 16px 24px;
	background: $--color-white;
  box-shadow: 0px -6px 8px -1px rgba(37,44,54,0.08);
  
  .nav-container {
    max-width: 460px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
	
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
