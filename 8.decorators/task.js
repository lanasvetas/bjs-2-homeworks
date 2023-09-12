// Задача № 1

function cachingDecoratorNew(func) {
    let cache = [];
    
    function wrapper(...args) {
        const hash = md5(args); 
        let objectInCache = cache.find(item => item.hash === hash); 
        if (objectInCache) { 
            console.log("Из кеша: " + objectInCache.value); 
            return "Из кеша: " + objectInCache.value;
        }
        let result = func(...args);
        cache.push({hash: hash, value: result}) ; 
        if (cache.length > 5) { 
          cache.shift()
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
    }
    

//Задача № 2

function debounceDecoratorNew(func, delay) {
	let timeoutId = null;

	function wrapper(...args) {
		wrapper.allCount += 1;
		console.log(timeoutId)
		if (timeoutId) {
			clearTimeout(timeoutId)
		} else {
			wrapper.count += 1;
			console.log(func(...args))
			timeoutId = setTimeout(() => {}, delay)
			return;
		}
		timeoutId = setTimeout(() => {
			timeoutId = null;
			console.log(func(...args));
		}, delay)
	}
	wrapper.count = 0;
	wrapper.allCount = 0;
	return wrapper;
};
