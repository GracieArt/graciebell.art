<script>
  import IconButton from './IconButton.svelte'
  import socialLinks from '$lib/social-links.json'

  export let type
  export let size
  export let color

  let title = ''
  let location = ''

  switch (type) {
    case "logo":
    title = "Home"
    location = "/"
    break

    case "twitter":
    title = "Twitter"
    location = socialLinks.twitter
    break

    case "youtube":
    title = "YouTube"
    location = socialLinks.youtube
    break

    case "soundcloud":
    title = "SoundCloud"
    location = socialLinks.soundcloud
    break

    case "github":
    title = "GitHub"
    location = socialLinks.github
    break

    case "tumblr":
    title = "Tumblr"
    location = socialLinks.tumblr
    break

    case "spacehey":
    title = "SpaceHey"
    location = socialLinks.spacehey
    break

    case "mastodon":
    title = "Mastodon"
    location = socialLinks.mastodon
    break

    case "newgrounds":
    title = "Newgrounds"
    location = socialLinks.newgrounds
    break

    case "instagram":
    title = "Instagram"
    location = socialLinks.instagram
    break

    case "deviantart":
    title = "Deviantart"
    location = socialLinks.deviantart
    break

    case "reddit":
    title = "Reddit"
    location = socialLinks.reddit
    break

    case "letterboxd":
    title = "Letterboxd"
    location = socialLinks.letterboxd
    break

    case "backloggd":
    title = "Backloggd"
    location = socialLinks.backloggd
  }

</script>

<a {title} href="{location}"><IconButton {type} {size} {color} /></a>
