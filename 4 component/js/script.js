// /*************** Popup Modal Common JS End ***************/

$('.video-btn-hmevt').on('click', function(){
    var mainIframeCont = document.getElementById('iframe-video-container');
    var iframePopupMainParent = document.getElementById('iframe-popup-main-parent');
    var popupVideoTitle = this.dataset.videoTitle    
    var closeBtn = document.getElementById('video-close-btn-hmevt');
    var iframe = document.createElement('iframe')
    iframe.setAttribute('allow','accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop');
    iframe.setAttribute('allowfullscreen','true','loop','autoplay');
    mainIframeCont.append(iframe)
    iframePopupMainParent.classList.remove('dsp-none')
    var videoLink = this.dataset.videolink
    document.getElementById('pop-up-title').innerText = popupVideoTitle;
    iframe.src = videoLink
})

$('#video-close-btn-hmevt').on('click', function(){
    var mainIframeCont = document.getElementById('iframe-video-container');
    var iframePopupMainParent = document.getElementById('iframe-popup-main-parent');
    mainIframeCont.innerHTML = '';
    iframePopupMainParent.classList.add('dsp-none')
})