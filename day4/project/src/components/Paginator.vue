<template>
    <div>
        <slot> </slot>
        <Pagination v-on:set-page="setPage" v-on:inc-page="incPage" v-on:dec-page="decPage" v-bind:paginationProp="paginationProp" />
    </div>
</template>


<script>
import Pagination from './Pagination'

export default {
    name: "Paginator",
    components: {
        Pagination
    },
    data(){ 
        return {
        pageNumber: 1,
        totalPages: false,
        totalElementsListed: 1,
        //we fetch the data
        pageElements : [],
        paginationProp : {
            totalPages:  this.totalPages,
            currentPage: this.pageNumber
            }
        
        }
   },
    props : ["elements"],

    methods: {
        getElements () {
            this.pageElements = this.elements.slice((this.pageNumber-1) * this.totalElementsListed, ((this.pageNumber-1) * this.totalElementsListed + this.totalElementsListed))
            this.$emit('element-update', this.pageElements)            
        },
        paginator(){
            this.totalPages = Math.ceil(this.elements.length / this.totalElementsListed)
            this.paginationProp= {totalPages: this.totalPages, 
                                    currentPage: this.pageNumber
                                    }
        },
        setPage(pageNumber){
            this.pageNumber = pageNumber 
            this.updateder()

        },
        incPage(){
            if (this.pageNumber + 1 != this.totalPages + 1){
                this.pageNumber += 1 
                this.updateder()
            }

        },
        decPage(){
            if (this.pageNumber - 1 != 0){
                this.pageNumber -= 1 
                this.updateder()
            }
        },
        updateder(){
            console.log(this.pageNumber)
            this.getElements()
            this.paginator()
        }
    },
    beforeMount(){
        this.getElements()
        this.paginator()

    },

}
</script>
