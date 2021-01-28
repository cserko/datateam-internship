<template>
    <div>
        <p v-bind:key="song.id" v-for="song in songs">
            {{song.name}} <br>
            {{song.lyrics_no}}
        </p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            songs: [
                {
                    id: 1,
                    name: "Heart in Hand",
                    artist: "Opeth",
                    lyrics_no: 1
                }
            ],
            lyrics: [
                {
                    lyrics_no: 1,
                    lyrics: "When I was Young so younger than today"
                }
            ]
        }
    }
}
</script>