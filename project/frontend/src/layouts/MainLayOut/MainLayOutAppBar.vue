<script setup>
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

onMounted(() => {
    locale.value = 'zhCH';
});

const showLangDropdown = ref(false);
const langBarText = ref('ZH');

const toggleLangDropdown = () => {
  showLangDropdown.value = !showLangDropdown.value;
};

// 语言切换
const selectLanguage = (lang) => {
  showLangDropdown.value = false;
  locale.value = lang;
  toggleLangDropdown();
  if (lang === 'en') {
    langBarText.value = 'EN';
  } else if (lang === 'ja') {
    langBarText.value = 'JA';
  } else if (lang === 'zhCH') {
    langBarText.value = 'ZH';
  } else if (lang === 'zhTW') {
    langBarText.value = 'ZHTW';
  }
};
</script>

<template>
    <div class="app-bar">
        <div class="left-part">
            <div class="box">
                <div class="contents">
                    <img src="../../assets/imgs/natuzakura.jpeg" alt="logo" />
                    <span>{{ $t('messages.index.title') }}</span>
                </div>
            </div>
        </div>

        <div class="right-part">
            <ul class="nav-list">
                <router-link :to="{ name: 'Home' }" class="nav-item">{{ $t('messages.app_bar.item_top') }}</router-link>
                <li class="nav-item">{{ $t('messages.app_bar.item_live') }}</li>
                <li class="nav-item">{{ $t('messages.app_bar.item_about') }}</li>
                <li class="nav-item">{{ $t('messages.app_bar.item_photo') }}</li>
                <li class="nav-item">{{ $t('messages.app_bar.item_profile') }}</li>
                <li class="nav-item">{{ $t('messages.app_bar.item_events') }}</li>
                <li class="nav-item">{{ $t('messages.app_bar.item_videos') }}</li>
                <li class="nav-item">{{ $t('messages.app_bar.item_music') }}</li>
                <li class="nav-item">{{ $t('messages.app_bar.item_special') }}</li>

                <li class="lang-switch" @click="toggleLangDropdown">
                    <span class="icon">🌐</span>
                    <span class="label">{{ langBarText }}</span>
                    <ul class="lang-dropdown" v-show="showLangDropdown">
                        <li class="lang-item" @click="selectLanguage('en')">English</li>
                        <li class="lang-item" @click="selectLanguage('ja')">日本語</li>
                        <li class="lang-item" @click="selectLanguage('zhCH')">简体中文</li>
                        <li class="lang-item" @click="selectLanguage('zhTW')">繁体中文</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.app-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    /* Ensure the app bar is above other content */
}

.left-part {
    flex: 1;
    padding: 0;
    font-family: "Microsoft YaHei";
}

.right-part {
    display: flex;
    justify-content: center;
    padding: 10px 0;
    background-color: transparent;
}

.box {
    position: relative;
    width: 320px;
    height: 104px;
    background-image: url('../../assets/imgs/logo_background.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.contents {
    position: relative;
    padding: 1.8em 6em 1em 1em;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contents img {
    height: 2.4em;
    margin-right: 10px;
}

.contents span {
    font-weight: bold;
    font-size: 1.2em;
    color: #3bb6f6;
}

.nav-list {
    display: flex;
    align-items: center;
    list-style: none;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 40px 0 0 40px;
    padding: 8px 16px;
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.nav-item {
    margin: 0 12px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
}

.lang-switch {
    display: flex;
    align-items: center;
    margin-left: 16px;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    position: relative;
}

.lang-switch .icon {
    margin-right: 6px;
    font-size: 16px;
}

.nav-item,
.lang-switch {
    color: #007fc9;
    transition: color 0.2s ease;
}

.nav-item:hover,
.lang-switch:hover {
    color: #00aeea;
}

.router-link-exact-active {
    color: #00aeea;
    font-weight: bold;
    border-bottom: 2px solid #00aeea;
}

.lang-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    min-width: 120px;
    z-index: 1001;
    padding: 8px 0;
    margin-top: 8px;
    list-style: none;
}

.lang-item {
    padding: 8px 16px;
    font-size: 13px;
    color: #007fc9;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
    white-space: nowrap;
}

.lang-item:hover {
    background-color: rgba(0, 127, 201, 0.1);
    color: #00aeea;
}

.lang-item:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.lang-item:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
</style>
