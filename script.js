const modal = document.querySelector("#modal-container");

modal.innerHTML = `<!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content custom-modal">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Bird Match</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true" style="color: white">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Bird Match is a responsive, browser-based quiz game designed to help
            users learn to identify common birds by name and image. It was built
            using HTML, CSS, and JavaScript as a personal design and development
            project focused on interactivity, accessibility, and educational
            fun.
          </div>
          <div class="modal-footer">
            <a href="projects.html#bird-match">Learn more</a>
          </div>
        </div>
      </div>
    </div>`;
