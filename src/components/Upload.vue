<template>
    <div>
        <section class="upload-videooz">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="video-file">
                            <i class="icon-graphics_05"></i>
                            <h3>Select video files to upload </h3>
                            <span>or drag & drop video files</span>
                            <form>
                                <label for="file-upload" class="custom-file-upload">
                                    Upload Video
                                </label>
                                <input id="file-upload" type="file"/>
                            </form>
                        </div><!--video-file end-->
                    </div>
                    <div class="col-lg-6">
                        <div class="youtube-dwn">
                            <i class="icon-graphics_03"></i>
                            <h3>Import videos from YouTube </h3>
                            <span>Copy / Paste your video link here</span>
                            <form>
                                <input type="text" name="import_video" placeholder="Paste link here">
                                <button type="submit">Import Video</button>
                            </form>
                        </div><!--youtube-dwn end-->
                    </div>
                </div>
            </div>
        </section><!--upload-videooz end-->

        <section class="suggestions">
            <div class="container">
                <div class="sgst_content">
                    <h3>Help & Suggestions</h3>
                    <p>By submitting your videos to ProjectFitnessTV, you acknowledge that you agree to
                        ProjectFitnessTV’s<a href="#" title=""> Terms of Service</a>and<a href="#" title="">Community
                            Guidelines</a>. Please be sure not to violate others’ copyright or privacy rights.<a
                                href="#"> Learn more</a></p>
                </div>
            </div>
        </section><!--Suggestions end-->

        <section class="abt-vidz">
            <ul>
                <li>
                    <a href="#">Upload Instructions </a>
                </li>
                <li>
                    <a href="#">Troubleshooting </a>
                </li>
                <li>
                    <a href="#">Mobile Upload </a>
                </li>
            </ul>
        </section><!--abt-vidz-->
    </div>
</template>

<script>
    export default {
        name: "Upload"
    }
</script>

<style scoped>

</style>
