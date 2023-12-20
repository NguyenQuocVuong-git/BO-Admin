<script setup>
    import SearchHeader from '@/components/SearchHeader.vue';
    import ButtonChangeMode from '@/components/ButtonChangeMode.vue';
    import Notification from '@/components/Notification.vue';
    import Messages from '@/components/Messages.vue';
    import UserInfoBadges from '@/components/UserInfoBadges.vue';
</script>

<template>
    <div class="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <SearchHeader />
        <div class="flex items-center gap-3 2xsm:gap-7">
            <ul class="flex items-center gap-2 2xsm:gap-4">
                <ButtonChangeMode />
                <Notification />
                <Messages />
                <UserInfoBadges />
            </ul>
        </div>
    </div>
</template>

<style scoped></style>