<template>
  <div class="mt-5 ml-5 text-center">
    <h1>Social media posts</h1>
    <span>Follow me on social media to stay up to date</span>
  </div>

  <div class="container text-center">
    <div class="post">
      <div>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02VhTxmRRtM75WRoxRdvAQCccy6VHzsXhK7JD72fPotd9DVvUmEyBP1vq1PuE2c14Zl%26id%3D100090998603012&show_text=true&width=500"
          width="500"
          height="690"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02bNQWLd3xm2R9Kqex5Bj3bYuUsjfz7GpHemmjD9vdmhAP9GCuSBE7aVmECSTyuCkNl%26id%3D100090998603012&show_text=true&width=500"
          width="500"
          height="767"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div>
        <iframe
          src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0ke3mMaWcYwkrxm9NrJ5bSQdxApKKvfBu6UJYxE84ZByP8JJBvDUknPqr16dhZ45Jl%26id%3D100090998603012&show_text=true&width=500"
          width="500"
          height="601"
          style="border: none; overflow: hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  </div>
  <GoogleReview />
  <footer-comp />
</template>

<script setup>
import GoogleReview from "@/components/GoogleReview.vue";
import FooterComp from "@/components/FooterComp.vue";
</script>
<style>
/* Custom styles for embedded Facebook posts */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.post {
  margin: 20px;
}

.post iframe {
  border: none;
  overflow: hidden;
  max-width: 100%;
}
iframe {
  max-width: 100%;
}
.iframe-container {
  width: 100%;
  max-width: 500px; /* Adjust max-width as needed */
  margin: 0 auto;
  padding: 20px; /* Add padding for spacing */
  box-sizing: border-box;
}

/* Ensure iframe fills its container */
.iframe-container iframe {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  iframe {
    height: 601px; /* Adjust the height for smaller screens */
  }
}

/* Media query for medium and lower screens */
@media (max-width: 960px) {
  .container {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
