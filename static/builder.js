String.prototype.prevent_xss = function() {
	var e = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;"
	};
	return this.replace(/[&<>]/g, function(t) {
		return e[t] || t
	})
}, $(document).ready(function() {
	const e = document.getElementById("embed_builder");
	async function t() {
		$("#embed_root").css({
			"border-left-color": e.color.value
		}), e.image_url.value ? e.is_banner.checked ? ($("#embed_thumbnail").css({
			display: "none"
		}), $("#embed_image").css({
			display: "flex"
		})) : ($("#embed_image").css({
			display: "none"
		}), $("#embed_thumbnail").css({
			display: "flex"
		})) : ($("#embed_image").css({
			display: "none"
		}), $("#embed_thumbnail").css({
			display: "none"
		})), $("#embed_thumbnail").attr("src", e.image_url.value), $("#embed_image").attr("src", e.image_url.value), e.title.value ? ($("#embed_title").html(e.title.value.prevent_xss()), $("#embed_title").css({
			display: "flex"
		})) : $("#embed_title").css({
			display: "none"
		}), e.description.value ? ($("#embed_description").text(e.description.value.prevent_xss()), $("#embed_description").css({
			display: "flex"
		})) : $("#embed_description").css({
			display: "none"
		}), e.header.value ? ($("#embed_header").text(e.header.value.prevent_xss()), $("#embed_header").css({
			display: "flex"
		})) : $("#embed_header").css({
			display: "none"
		})
	}
	t(), $(".change-trigger").bind("input", async e => {
		t()
	}), $("#embed_builder").bind("submit", async t => {
		t.preventDefault();
		let s = {
			title: e.title.value,
			header: e.header.value,
			description: e.description.value,
			image_url: e.image_url.value,
			is_banner: e.is_banner.checked,
			color: e.color.value,
			is_saved: e.is_saved.checked
		};
		const a = new URLSearchParams(s),
			n = await fetch("/build?" + a.toString(), {
				method: "GET"
			});
		n.ok ? (document.getElementById("error-div").style.display = "none", document.getElementById("url_output").value = (await n.json()).url) : (document.getElementById("error-div").style.display = "flex", document.getElementById("error-note").innerHTML = (await n.json()).message)
	})
});