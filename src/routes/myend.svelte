<script context="module">
    export const load = async ({ fetch }) => {
        const res = await fetch("myend.json");
        const data = await res.json();
        console.log(data);

        return {
            props: {
                data,
            },
        };
    };
</script>

<script>
    export let data;
</script>

<h2> come on already</h2>

<pre>{JSON.stringify(data)}</pre> 