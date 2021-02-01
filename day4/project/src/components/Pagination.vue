<template>
    <div class="pagination">
        <button @click="$emit('dec-page', currentPage)"> prev</button>
        <span v-for="currentPage in pageNumEnd" v-bind:key="currentPage">
           <button @click="$emit('set-page', currentPage)" class="active" v-if="currentPage == paginationProp.currentPage">{{currentPage}}</button> 
           <button @click="$emit('set-page', currentPage)" v-else>{{currentPage}}</button> 
        </span>
        <button @click="$emit('inc-page', currentPage)"> next</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            pageNumShow: this.paginationProp.currentPage, 
            pageNumEnd: this.paginationProp.totalPages
        }
    },
    props : ["paginationProp"],
    method: {
        getListedPageCount(){
            if (this.paginationProp.totalPage - this.paginationProp.currentPage < this.pageNumShow){
                this.pageNumShow = this.paginationProp.totalPage - this.paginationProp.currentPage
            }
            this.pageNumEnd = this.paginationProp.currentPage + this.pageNumShow
        }
    },
    beforeMount(){
        this.getListedPageCount()
    }

}
</script>

<style scoped>
    .pagination {
    display: inline-block;
    }

    .pagination button {
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    }

    .pagination button.active {
    background-color: #4c74af;
    color: white;
    border-radius: 5px;
    }

    .pagination button:hover:not(.active) {
    background-color: #ddd;
    border-radius: 5px;
    }
</style>