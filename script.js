function changeTab(tabName) {
    const tabs = document.querySelectorAll('.tab')
    const tabContents = document.querySelectorAll('.tab-content')

    // Non-active all content
    tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active')
    })

    // only active the content we click
    document.querySelectorAll(`.${tabName}-item`).forEach((item) => item.classList.add('active'))

    // Non-active all tabs
    tabs.forEach((tab) => {
        tab.classList.remove('bg-orangeGradient')
    })

    // only active the tab we click
    document.getElementById(`tab-${tabName}`).classList.add('bg-orangeGradient')
}