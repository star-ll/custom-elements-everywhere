/**
 * @license
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Register components
import "./dist/index.mjs";

// Register pre-defined web components
import "ce-without-children";
import "ce-with-children";
import "ce-with-properties";
import "ce-with-event";

// Run basic and advanced tests through Karma
import "./src/basic-tests.js";
import "./src/advanced-tests.js";
