// Get Map Data
const mapDiv = document.getElementById('map');
const map = JSON.parse(MAP_DATA);
const pathDiv = document.getElementById('path');

let path = '';

function setPath(p) {
	path = p;
	render();
}

function getPathData() {
	let data = map;
	path.split('/')
		.forEach(function(key) {
			if (Object.keys(data).includes(key)) {
				data = data[key];
			}
		});
	return data;
}

function renderPath() {
	let pathStops = '';
	let brokePath = '';
	path.split('/').forEach(function(dir) {
		if (dir !== '') {
			brokePath += `/${dir}`;
			pathStops += `
			<div class="path-stop">
				<p>/</p>
				<button onclick="setPath('${brokePath}')">${dir}</button>
			</div>`;
		}
	});
	return pathStops;
}

function renderFile(file) {
	return `
	<a href="${path}/${file}" target="_blank" rel="noopener noreferrer">
		<div class="item file">
			<img src="src/assets/img/file.svg" alt="File:" />
			<p>${file}</p>
			<div class="spacer"></div>
		</div>
	</a>`;
}

function renderFolder(folder) {
	return `
	<div class="item folder" onclick="setPath('${path}/${folder}')">
		<img src="src/assets/img/folder.svg" alt="Folder:" />
		<p>${folder}</p>
		<div class="spacer"></div>
	</div>`;
}

function renderData(data) {
	let elems = '';
	const nonDirs = ['__depth__', 'files'];
	Object.keys(data)
		.filter(function(a) {
			return !nonDirs.includes(a);
		})
		.forEach(function(dir) {
			elems += renderFolder(dir);
		});
	if (data.files) {
		data.files.forEach(function(file) {
			elems += renderFile(file);
		});
	}
	return elems;
}

function render() {
	pathDiv.innerHTML = renderPath();
	mapDiv.innerHTML = renderData(getPathData());
}

render();

