// Get Map Data
const mapDiv = document.getElementById('map');
const map = JSON.parse(MAP_DATA);

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

function renderFile(file) {
	return `<a href="${path}/${file}" target="_blank" rel="noopener noreferrer">
		<div class="item file">
			<p><span>File:</span>${file}</p>
		</div>
	</a>`;
}

function renderFolder(folder) {
	return `<div class="item folder" onclick="setPath('${path}/${folder}')">
		<p><span>Folder:</span>${folder}</p>
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
	document.getElementById('map').innerHTML = renderData(getPathData());
}

render();

