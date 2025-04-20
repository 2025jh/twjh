document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const textarea = document.querySelector("textarea");
  const tagButtons = document.querySelectorAll(".tag");
  let selectedTag = "其他";

  tagButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tagButtons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      selectedTag = button.innerText;
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const content = textarea.value.trim();
    if (!content) return alert("請輸入內容！");

    const url = "https://script.google.com/macros/s/AKfycby_U43ALKhugvoF8tuklSUd3mbH7eJHMJctxxV072RRAmfZj_jllIKSAYzzsxKL5H2L/exec";

    try {
      await fetch(url, {
        method: "POST",
        body: new URLSearchParams({
          tag: selectedTag,
          content: content,
        }),
      });
      alert("投稿成功！");
      textarea.value = "";
    } catch (err) {
      alert("提交失敗，請稍後再試！");
      console.error(err);
    }
  });
});
