Vendor-prefixed `setStyle`
==========================


## Usage

Just load the script sometime after the mootools-core and it will
monkeypatch the `Element.setStyle` function to support prefixes.


## Example

    el.setStyle('animation-name', 'boss');

    // -webkit-animation-name: 'boss'
    // -khtml-animation-name: 'boss'
    // -moz-animation-name: 'boss'
    // -ms-animation-name: 'boss'
    // -o-animation-name: 'boss'
    // animation-name: 'boss'


## Note

Not all properties are supported yet. But please feel free to contribute if
you find one missing.


## License

Apache License 2.0

