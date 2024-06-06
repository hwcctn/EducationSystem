<template>
    <div class="login">
        <div class="left">
            <div class="text">
                <h1>欢迎来到教育系统</h1>

                <hr style="width: 60%;" />
                    
                <p>这是桂林电子科技大学教学管理系统,欢迎注册</p>
            </div>
        </div>
        <div class="right">
            <div class="center">
            <register/>
        </div>
        </div>

    </div>
</template>

<script setup lang="ts">


</script>

<style scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-image: url(https://img.zcool.cn/community/019cd15db6a804a8012163babc8b14.gif);
    background-repeat: no-repeat;
    background-size: cover;
}
.text{
    position: absolute;
	top: 40%;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
}
.left {
    width: 50%;
    height: 100%;
    color: #fefafa;
    float: left;
    position: relative;
    display: flex;
    align-items: center
}

.right {
    width: 50%;
    height: 100%;
    position: relative;
    float: left;


}
.center{
    position: absolute;
	top: 10%;
	left: 0;
	right: 0;
	bottom: 0;
}
</style>
