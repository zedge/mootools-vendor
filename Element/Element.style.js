
/*!
 * Vendor-prefixed `setStyle`
 *
 * Works as `Element.setStyle` except if you pass it a css3 property that
 * need prefixing it will "automagically" do that for you.
 *
 * https://github.com/zedge/mootools-vendor
 *
 *
 * Copyright 2013 Zedge Holdings, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

(function() {
  "very strict";

  var vendors = ['Webkit', 'Moz', 'O', 'Ms', 'Khtml'];
  var needPrefix = ['anim.+', 'trans.+'];

  /**
   * Extend the native `Element` object
   * with a new `setStyle`
   */

  Element.implement({

    originalSetStyle: Element.prototype.setStyle,

    setStyle: function(property, value) {

      // Add vendor-prefixes

      if (property.match(new RegExp('(' + needPrefix.join('|') + ')'))) {
        vendors.each(function(vendor) {
          var prefixedProperty = (vendor + '-' + property).camelCase();
          this.style[prefixedProperty] = value;
        }.bind(this));
      }

      // Process other properties as usual

      return this.originalSetStyle(property, value);

    }

  });

})();

