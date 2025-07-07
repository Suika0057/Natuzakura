<script setup></script>

<template>
    <div class="app-bar">
        <div class="left-part">
            <div class="box">
                <div class="contents">
                    <img src="../../assets/imgs/natuzakura.jpeg" alt="logo" />
                    <span>NATSUZAKURA</span>
                </div>
            </div>
        </div>

        <div class="right-part">
            <ul class="nav-list">
                <router-link :to="{ name: 'Home' }" class="nav-item">TOP</router-link>
                <li class="nav-item">LIVE</li>
                <li class="nav-item">ABOUT</li>
                <li class="nav-item">PHOTO</li>
                <li class="nav-item">PROFILE</li>
                <li class="nav-item">EVENTS</li>
                <li class="nav-item">VIDEOS</li>
                <li class="nav-item">MUSIC</li>
                <li class="nav-item">SPECIAL</li>

                <li class="lang-switch">
                    <span class="icon">🌐</span>
                    <span class="label">EN</span>
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
</style>
