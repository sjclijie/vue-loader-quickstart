<template>
<div class="t-dimmer" v-show="show"></div>
<div class="t-modal" v-show="show">
    <div class="t-modal__header">
        <h3 class="t-modal__header--tt"
            v-show="title!==''"
            v-text="title"></h3>
        <p class="t-modal__header--ct" v-text="content"></p>
    </div>
    <div class="t-modal__footer">
        <a class="t-modal__footer--btn"
           v-for="btn in buttons"
           @click.prevent="notify(btn.name)">
            {{ btn.text }}
        </a>
    </div>
</div>
</template>
<script>
export default {
	props : {
		show : {
			type : Boolean,
			default: false,
			twoWay : true
		},
		title : {
			type : String
		},
		content : {
			type : String
		},
		buttons: {
			type : Array,
			default: [
				{ name: 'cancel', text: '取消' },
                { name: 'confirm', text: '确定' }
			]
		}
	},
	methods : {
		notify(type) {
			this.$dispatch(type)
            this.show = false
		}
	}
}
</script>