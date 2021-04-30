export const prices = [
  {
    name: 'Any',
    min: 0,
    max: 0,
  },
  {
    name: `UGX.10 to UGX.100`,
    min: 10,
    max: 100,
  },
  {
    name: `UGX.100 to UGX.1000`,
    min: 100,
    max: 1000,
  },
  {
    name: `UGX.1000 to UGX.10000`,
    min: 1000,
    max: 10000,
  },
  {
    name: `UGX.10000 to UGX.100000`,
    min: 10000,
    max: 100000,
  },
  {
    name: `UGX.100000 to UGX.1000000`,
    min: 100000,
    max: 1000000,
  },
  {
    name: `UGX.1000000 to UGX.10000000`,
    min: 1000000,
    max: 10000000,
  },
  {
    name: `UGX.10000000 to UGX.100000000`,
    min: 10000000,
    max: 100000000,
  },
  {
    name: `UGX.100000000 to UGX.1000000000`,
    min: 100000000,
    max: 1000000000,
  },
];
export const ratings = [
  {
    name: '4stars & up',
    rating: 4,
  },

  {
    name: '3stars & up',
    rating: 3,
  },

  {
    name: '2stars & up',
    rating: 2,
  },

  {
    name: '1stars & up',
    rating: 1,
  },
];

export function setWithExpiry(key, value, ttl) {
	const now = new Date()

	// `item` is an object which contains the original value
	// as well as the time when it's supposed to expire
	const item = {
		value: value,
		expiry: now.getTime() + ttl,
	}
	localStorage.setItem(key, JSON.stringify(item))
}

export function getMobileMenu() {
  document.querySelector('#navbar').classList.toggle('navbar-mobile');
  this.classList.toggle('bi-list');
  this.classList.toggle('bi-x');
}

export function getWithExpiry(key) {
	const itemStr = localStorage.getItem(key)
	// if the item doesn't exist, return null
	if (!itemStr) {
		return null
	}
	const item = JSON.parse(itemStr)
	const now = new Date()
	// compare the expiry time of the item with the current time
	if (now.getTime() > item.expiry) {
		// If the item is expired, delete the item from storage
		// and return null
		localStorage.removeItem(key)
		return null
	}
	return item.value
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}