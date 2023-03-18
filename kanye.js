function loadkanye() {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        // .then(data => console.log(data))      //এইটা দিয়ে শুধূ দেখার জন্য আর যদি আমরা এইটার ভিতরে যে তথ্যগুলো আছে সেগুলো যদি সরাসরি দেখতে চাই তাহলে নিচে ফলো করতে হবে যেটা আসবে সেটা আবার আরেকটা function ক্রিট করে আনতে হবে। যেমন: 2য় function এর ভেলুটাকে এনেছি। html থেকে id টাকে ধরেছি .innerText  তারপর data.quote মানে তার ভেলুটাকে দিয়েছি 
        .then(data => displayData(data))
}


function displayData(data) {
    console.log(data);
    document.getElementById('kanye-id').innerText = data.quote;

}