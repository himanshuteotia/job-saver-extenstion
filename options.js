document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(["notionToken", "databaseId"], (data) => {
    document.getElementById("token").value = data.notionToken || "";
    document.getElementById("db").value = data.databaseId || "";
  });

  document.getElementById("save").addEventListener("click", () => {
    chrome.storage.sync.set(
      {
        notionToken: document.getElementById("token").value,
        databaseId: document.getElementById("db").value,
      },
      () => {
        const statusDiv = document.getElementById("status");
        statusDiv.textContent = "Saved!";
        setTimeout(() => {
          statusDiv.textContent = "";
        }, 1500);
      }
    );
  });
});
