//Fetch Posts 
fetch("http://127.0.0.1:5500/database/posts.json")
.then(res=> res.json())
.then(data=>{
    data.forEach(ele => {
        appendEl(ele)
    });
})


//Fetch users

//Fetch photos

//Append function
function appendEl(post) {
    let body = document.getElementById("output");

    let div = document.createElement("div");
    div.classList.add()

    div.innerHTML = `<article class="h-96 flex flex-col dark:dark:bg-gray-900">
    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
        <img alt="" class="object-cover w-full h-52 dark:dark:bg-gray-500" src="https://picsum.photos/1080/720">
    </a>
    <div class="flex flex-col flex-1 p-6">
        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
        <a rel="noopener noreferrer" href="#" class="text-xs tracki uppercase hover:underline dark:dark:text-violet-400">Convenire</a>
        <h3 class="flex-1 py-2 text-lg font-semibold leadi">${post.title}</h3>
        <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:dark:text-gray-400">
            <span>June 1, 2020</span>
            <span>2.1K views</span>
        </div>
    </div>
</article>`
    body.append(div);
}