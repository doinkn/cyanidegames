function detectInfinite(part) {
	if (part !== undefined) return isNaN(Decimal.log10(part))
	return detectInfinite(player.money) || detectInfinite(player.infinityPoints) || detectInfinite(player.eternityPoints) || detectInfinite(player.dilation.dilatedTime)
}

var infiniteDetected = false
var infiniteCheck = false
var infiniteCheck2 = false
var infiniteSave

function isInfiniteDetected() { // todo: make better infinite detection system
	if (infiniteDetected) return
	if (detectInfinite()) {
		infiniteDetected = true
		exportInfiniteSave()
		reload()
		infiniteDetected = false
		if (el("welcome").style.display != "flex") el("welcome").style.display = "flex"
		el("welcomeMessage").innerHTML = "I'm sorry, but you got an Infinite bug. Because of this, your save is reverted to your last saved progress. It is recommended to post how did you got this bug. Thanks! :)"
		return true
	}
}

function exportInfiniteSave() {
	infiniteSave = btoa(JSON.stringify(player))
	el("bugExport").style.display = ""
	bugExport()
}

function bugExport() {
	copyToClipboard(infiniteSave)
}