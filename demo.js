/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const demo = $root.demo = (() => {

    /**
     * Namespace demo.
     * @exports demo
     * @namespace
     */
    const demo = {};

    demo.Match = (function() {

        /**
         * Constructs a new Match service.
         * @memberof demo
         * @classdesc Represents a Match
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Match(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Match.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Match;

        /**
         * Creates new Match service using the specified rpc implementation.
         * @function create
         * @memberof demo.Match
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Match} RPC service. Useful where requests and/or responses are streamed.
         */
        Match.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link demo.Match#selectCompetitionList}.
         * @memberof demo.Match
         * @typedef SelectCompetitionListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {demo.SelectCompetitionListRouterRsp} [response] SelectCompetitionListRouterRsp
         */

        /**
         * Calls SelectCompetitionList.
         * @function selectCompetitionList
         * @memberof demo.Match
         * @instance
         * @param {demo.ISelectCompetitionListReq} request SelectCompetitionListReq message or plain object
         * @param {demo.Match.SelectCompetitionListCallback} callback Node-style callback called with the error, if any, and SelectCompetitionListRouterRsp
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Match.prototype.selectCompetitionList = function selectCompetitionList(request, callback) {
            return this.rpcCall(selectCompetitionList, $root.demo.SelectCompetitionListReq, $root.demo.SelectCompetitionListRouterRsp, request, callback);
        }, "name", { value: "SelectCompetitionList" });

        /**
         * Calls SelectCompetitionList.
         * @function selectCompetitionList
         * @memberof demo.Match
         * @instance
         * @param {demo.ISelectCompetitionListReq} request SelectCompetitionListReq message or plain object
         * @returns {Promise<demo.SelectCompetitionListRouterRsp>} Promise
         * @variation 2
         */

        return Match;
    })();

    demo.SelectCompetitionListReq = (function() {

        /**
         * Properties of a SelectCompetitionListReq.
         * @memberof demo
         * @interface ISelectCompetitionListReq
         * @property {string|null} [name] SelectCompetitionListReq name
         * @property {string|null} [status] SelectCompetitionListReq status
         * @property {number|null} [pageIndex] SelectCompetitionListReq pageIndex
         * @property {number|null} [pageSize] SelectCompetitionListReq pageSize
         */

        /**
         * Constructs a new SelectCompetitionListReq.
         * @memberof demo
         * @classdesc Represents a SelectCompetitionListReq.
         * @implements ISelectCompetitionListReq
         * @constructor
         * @param {demo.ISelectCompetitionListReq=} [properties] Properties to set
         */
        function SelectCompetitionListReq(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelectCompetitionListReq name.
         * @member {string} name
         * @memberof demo.SelectCompetitionListReq
         * @instance
         */
        SelectCompetitionListReq.prototype.name = "";

        /**
         * SelectCompetitionListReq status.
         * @member {string} status
         * @memberof demo.SelectCompetitionListReq
         * @instance
         */
        SelectCompetitionListReq.prototype.status = "";

        /**
         * SelectCompetitionListReq pageIndex.
         * @member {number} pageIndex
         * @memberof demo.SelectCompetitionListReq
         * @instance
         */
        SelectCompetitionListReq.prototype.pageIndex = 0;

        /**
         * SelectCompetitionListReq pageSize.
         * @member {number} pageSize
         * @memberof demo.SelectCompetitionListReq
         * @instance
         */
        SelectCompetitionListReq.prototype.pageSize = 0;

        /**
         * Creates a new SelectCompetitionListReq instance using the specified properties.
         * @function create
         * @memberof demo.SelectCompetitionListReq
         * @static
         * @param {demo.ISelectCompetitionListReq=} [properties] Properties to set
         * @returns {demo.SelectCompetitionListReq} SelectCompetitionListReq instance
         */
        SelectCompetitionListReq.create = function create(properties) {
            return new SelectCompetitionListReq(properties);
        };

        /**
         * Encodes the specified SelectCompetitionListReq message. Does not implicitly {@link demo.SelectCompetitionListReq.verify|verify} messages.
         * @function encode
         * @memberof demo.SelectCompetitionListReq
         * @static
         * @param {demo.ISelectCompetitionListReq} message SelectCompetitionListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectCompetitionListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.status);
            if (message.pageIndex != null && Object.hasOwnProperty.call(message, "pageIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageIndex);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pageSize);
            return writer;
        };

        /**
         * Encodes the specified SelectCompetitionListReq message, length delimited. Does not implicitly {@link demo.SelectCompetitionListReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof demo.SelectCompetitionListReq
         * @static
         * @param {demo.ISelectCompetitionListReq} message SelectCompetitionListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectCompetitionListReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelectCompetitionListReq message from the specified reader or buffer.
         * @function decode
         * @memberof demo.SelectCompetitionListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {demo.SelectCompetitionListReq} SelectCompetitionListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectCompetitionListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.SelectCompetitionListReq();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.status = reader.string();
                        break;
                    }
                case 3: {
                        message.pageIndex = reader.int32();
                        break;
                    }
                case 4: {
                        message.pageSize = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelectCompetitionListReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof demo.SelectCompetitionListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {demo.SelectCompetitionListReq} SelectCompetitionListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectCompetitionListReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelectCompetitionListReq message.
         * @function verify
         * @memberof demo.SelectCompetitionListReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelectCompetitionListReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isString(message.status))
                    return "status: string expected";
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                if (!$util.isInteger(message.pageIndex))
                    return "pageIndex: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            return null;
        };

        /**
         * Creates a SelectCompetitionListReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof demo.SelectCompetitionListReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {demo.SelectCompetitionListReq} SelectCompetitionListReq
         */
        SelectCompetitionListReq.fromObject = function fromObject(object) {
            if (object instanceof $root.demo.SelectCompetitionListReq)
                return object;
            let message = new $root.demo.SelectCompetitionListReq();
            if (object.name != null)
                message.name = String(object.name);
            if (object.status != null)
                message.status = String(object.status);
            if (object.pageIndex != null)
                message.pageIndex = object.pageIndex | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            return message;
        };

        /**
         * Creates a plain object from a SelectCompetitionListReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof demo.SelectCompetitionListReq
         * @static
         * @param {demo.SelectCompetitionListReq} message SelectCompetitionListReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelectCompetitionListReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.status = "";
                object.pageIndex = 0;
                object.pageSize = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                object.pageIndex = message.pageIndex;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            return object;
        };

        /**
         * Converts this SelectCompetitionListReq to JSON.
         * @function toJSON
         * @memberof demo.SelectCompetitionListReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelectCompetitionListReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SelectCompetitionListReq
         * @function getTypeUrl
         * @memberof demo.SelectCompetitionListReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SelectCompetitionListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/demo.SelectCompetitionListReq";
        };

        return SelectCompetitionListReq;
    })();

    demo.SelectCompetitionListRouterRsp = (function() {

        /**
         * Properties of a SelectCompetitionListRouterRsp.
         * @memberof demo
         * @interface ISelectCompetitionListRouterRsp
         * @property {demo.ISelectCometitionList|null} [list] SelectCompetitionListRouterRsp list
         * @property {number|null} [totalCount] SelectCompetitionListRouterRsp totalCount
         */

        /**
         * Constructs a new SelectCompetitionListRouterRsp.
         * @memberof demo
         * @classdesc Represents a SelectCompetitionListRouterRsp.
         * @implements ISelectCompetitionListRouterRsp
         * @constructor
         * @param {demo.ISelectCompetitionListRouterRsp=} [properties] Properties to set
         */
        function SelectCompetitionListRouterRsp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelectCompetitionListRouterRsp list.
         * @member {demo.ISelectCometitionList|null|undefined} list
         * @memberof demo.SelectCompetitionListRouterRsp
         * @instance
         */
        SelectCompetitionListRouterRsp.prototype.list = null;

        /**
         * SelectCompetitionListRouterRsp totalCount.
         * @member {number} totalCount
         * @memberof demo.SelectCompetitionListRouterRsp
         * @instance
         */
        SelectCompetitionListRouterRsp.prototype.totalCount = 0;

        /**
         * Creates a new SelectCompetitionListRouterRsp instance using the specified properties.
         * @function create
         * @memberof demo.SelectCompetitionListRouterRsp
         * @static
         * @param {demo.ISelectCompetitionListRouterRsp=} [properties] Properties to set
         * @returns {demo.SelectCompetitionListRouterRsp} SelectCompetitionListRouterRsp instance
         */
        SelectCompetitionListRouterRsp.create = function create(properties) {
            return new SelectCompetitionListRouterRsp(properties);
        };

        /**
         * Encodes the specified SelectCompetitionListRouterRsp message. Does not implicitly {@link demo.SelectCompetitionListRouterRsp.verify|verify} messages.
         * @function encode
         * @memberof demo.SelectCompetitionListRouterRsp
         * @static
         * @param {demo.ISelectCompetitionListRouterRsp} message SelectCompetitionListRouterRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectCompetitionListRouterRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && Object.hasOwnProperty.call(message, "list"))
                $root.demo.SelectCometitionList.encode(message.list, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.totalCount != null && Object.hasOwnProperty.call(message, "totalCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.totalCount);
            return writer;
        };

        /**
         * Encodes the specified SelectCompetitionListRouterRsp message, length delimited. Does not implicitly {@link demo.SelectCompetitionListRouterRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof demo.SelectCompetitionListRouterRsp
         * @static
         * @param {demo.ISelectCompetitionListRouterRsp} message SelectCompetitionListRouterRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectCompetitionListRouterRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelectCompetitionListRouterRsp message from the specified reader or buffer.
         * @function decode
         * @memberof demo.SelectCompetitionListRouterRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {demo.SelectCompetitionListRouterRsp} SelectCompetitionListRouterRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectCompetitionListRouterRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.SelectCompetitionListRouterRsp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.list = $root.demo.SelectCometitionList.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.totalCount = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelectCompetitionListRouterRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof demo.SelectCompetitionListRouterRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {demo.SelectCompetitionListRouterRsp} SelectCompetitionListRouterRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectCompetitionListRouterRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelectCompetitionListRouterRsp message.
         * @function verify
         * @memberof demo.SelectCompetitionListRouterRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelectCompetitionListRouterRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                let error = $root.demo.SelectCometitionList.verify(message.list);
                if (error)
                    return "list." + error;
            }
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                if (!$util.isInteger(message.totalCount))
                    return "totalCount: integer expected";
            return null;
        };

        /**
         * Creates a SelectCompetitionListRouterRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof demo.SelectCompetitionListRouterRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {demo.SelectCompetitionListRouterRsp} SelectCompetitionListRouterRsp
         */
        SelectCompetitionListRouterRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.demo.SelectCompetitionListRouterRsp)
                return object;
            let message = new $root.demo.SelectCompetitionListRouterRsp();
            if (object.list != null) {
                if (typeof object.list !== "object")
                    throw TypeError(".demo.SelectCompetitionListRouterRsp.list: object expected");
                message.list = $root.demo.SelectCometitionList.fromObject(object.list);
            }
            if (object.totalCount != null)
                message.totalCount = object.totalCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a SelectCompetitionListRouterRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof demo.SelectCompetitionListRouterRsp
         * @static
         * @param {demo.SelectCompetitionListRouterRsp} message SelectCompetitionListRouterRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelectCompetitionListRouterRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.list = null;
                object.totalCount = 0;
            }
            if (message.list != null && message.hasOwnProperty("list"))
                object.list = $root.demo.SelectCometitionList.toObject(message.list, options);
            if (message.totalCount != null && message.hasOwnProperty("totalCount"))
                object.totalCount = message.totalCount;
            return object;
        };

        /**
         * Converts this SelectCompetitionListRouterRsp to JSON.
         * @function toJSON
         * @memberof demo.SelectCompetitionListRouterRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelectCompetitionListRouterRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SelectCompetitionListRouterRsp
         * @function getTypeUrl
         * @memberof demo.SelectCompetitionListRouterRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SelectCompetitionListRouterRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/demo.SelectCompetitionListRouterRsp";
        };

        return SelectCompetitionListRouterRsp;
    })();

    demo.SelectCometitionList = (function() {

        /**
         * Properties of a SelectCometitionList.
         * @memberof demo
         * @interface ISelectCometitionList
         * @property {demo.ISelectCompetitionListRsp|null} [comptition] SelectCometitionList comptition
         * @property {demo.ISelectCompetitionTeamListRsp|null} [teams] SelectCometitionList teams
         */

        /**
         * Constructs a new SelectCometitionList.
         * @memberof demo
         * @classdesc Represents a SelectCometitionList.
         * @implements ISelectCometitionList
         * @constructor
         * @param {demo.ISelectCometitionList=} [properties] Properties to set
         */
        function SelectCometitionList(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelectCometitionList comptition.
         * @member {demo.ISelectCompetitionListRsp|null|undefined} comptition
         * @memberof demo.SelectCometitionList
         * @instance
         */
        SelectCometitionList.prototype.comptition = null;

        /**
         * SelectCometitionList teams.
         * @member {demo.ISelectCompetitionTeamListRsp|null|undefined} teams
         * @memberof demo.SelectCometitionList
         * @instance
         */
        SelectCometitionList.prototype.teams = null;

        /**
         * Creates a new SelectCometitionList instance using the specified properties.
         * @function create
         * @memberof demo.SelectCometitionList
         * @static
         * @param {demo.ISelectCometitionList=} [properties] Properties to set
         * @returns {demo.SelectCometitionList} SelectCometitionList instance
         */
        SelectCometitionList.create = function create(properties) {
            return new SelectCometitionList(properties);
        };

        /**
         * Encodes the specified SelectCometitionList message. Does not implicitly {@link demo.SelectCometitionList.verify|verify} messages.
         * @function encode
         * @memberof demo.SelectCometitionList
         * @static
         * @param {demo.ISelectCometitionList} message SelectCometitionList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectCometitionList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.comptition != null && Object.hasOwnProperty.call(message, "comptition"))
                $root.demo.SelectCompetitionListRsp.encode(message.comptition, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.teams != null && Object.hasOwnProperty.call(message, "teams"))
                $root.demo.SelectCompetitionTeamListRsp.encode(message.teams, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SelectCometitionList message, length delimited. Does not implicitly {@link demo.SelectCometitionList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof demo.SelectCometitionList
         * @static
         * @param {demo.ISelectCometitionList} message SelectCometitionList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectCometitionList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelectCometitionList message from the specified reader or buffer.
         * @function decode
         * @memberof demo.SelectCometitionList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {demo.SelectCometitionList} SelectCometitionList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectCometitionList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.SelectCometitionList();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.comptition = $root.demo.SelectCompetitionListRsp.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.teams = $root.demo.SelectCompetitionTeamListRsp.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelectCometitionList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof demo.SelectCometitionList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {demo.SelectCometitionList} SelectCometitionList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectCometitionList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelectCometitionList message.
         * @function verify
         * @memberof demo.SelectCometitionList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelectCometitionList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.comptition != null && message.hasOwnProperty("comptition")) {
                let error = $root.demo.SelectCompetitionListRsp.verify(message.comptition);
                if (error)
                    return "comptition." + error;
            }
            if (message.teams != null && message.hasOwnProperty("teams")) {
                let error = $root.demo.SelectCompetitionTeamListRsp.verify(message.teams);
                if (error)
                    return "teams." + error;
            }
            return null;
        };

        /**
         * Creates a SelectCometitionList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof demo.SelectCometitionList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {demo.SelectCometitionList} SelectCometitionList
         */
        SelectCometitionList.fromObject = function fromObject(object) {
            if (object instanceof $root.demo.SelectCometitionList)
                return object;
            let message = new $root.demo.SelectCometitionList();
            if (object.comptition != null) {
                if (typeof object.comptition !== "object")
                    throw TypeError(".demo.SelectCometitionList.comptition: object expected");
                message.comptition = $root.demo.SelectCompetitionListRsp.fromObject(object.comptition);
            }
            if (object.teams != null) {
                if (typeof object.teams !== "object")
                    throw TypeError(".demo.SelectCometitionList.teams: object expected");
                message.teams = $root.demo.SelectCompetitionTeamListRsp.fromObject(object.teams);
            }
            return message;
        };

        /**
         * Creates a plain object from a SelectCometitionList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof demo.SelectCometitionList
         * @static
         * @param {demo.SelectCometitionList} message SelectCometitionList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelectCometitionList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.comptition = null;
                object.teams = null;
            }
            if (message.comptition != null && message.hasOwnProperty("comptition"))
                object.comptition = $root.demo.SelectCompetitionListRsp.toObject(message.comptition, options);
            if (message.teams != null && message.hasOwnProperty("teams"))
                object.teams = $root.demo.SelectCompetitionTeamListRsp.toObject(message.teams, options);
            return object;
        };

        /**
         * Converts this SelectCometitionList to JSON.
         * @function toJSON
         * @memberof demo.SelectCometitionList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelectCometitionList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SelectCometitionList
         * @function getTypeUrl
         * @memberof demo.SelectCometitionList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SelectCometitionList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/demo.SelectCometitionList";
        };

        return SelectCometitionList;
    })();

    demo.SelectCompetitionListRsp = (function() {

        /**
         * Properties of a SelectCompetitionListRsp.
         * @memberof demo
         * @interface ISelectCompetitionListRsp
         * @property {number|null} [competitionId] SelectCompetitionListRsp competitionId
         * @property {string|null} [name] SelectCompetitionListRsp name
         * @property {string|null} [matchTime] SelectCompetitionListRsp matchTime
         * @property {number|null} [subscribe] SelectCompetitionListRsp subscribe
         * @property {number|null} [status] SelectCompetitionListRsp status
         */

        /**
         * Constructs a new SelectCompetitionListRsp.
         * @memberof demo
         * @classdesc Represents a SelectCompetitionListRsp.
         * @implements ISelectCompetitionListRsp
         * @constructor
         * @param {demo.ISelectCompetitionListRsp=} [properties] Properties to set
         */
        function SelectCompetitionListRsp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelectCompetitionListRsp competitionId.
         * @member {number} competitionId
         * @memberof demo.SelectCompetitionListRsp
         * @instance
         */
        SelectCompetitionListRsp.prototype.competitionId = 0;

        /**
         * SelectCompetitionListRsp name.
         * @member {string} name
         * @memberof demo.SelectCompetitionListRsp
         * @instance
         */
        SelectCompetitionListRsp.prototype.name = "";

        /**
         * SelectCompetitionListRsp matchTime.
         * @member {string} matchTime
         * @memberof demo.SelectCompetitionListRsp
         * @instance
         */
        SelectCompetitionListRsp.prototype.matchTime = "";

        /**
         * SelectCompetitionListRsp subscribe.
         * @member {number} subscribe
         * @memberof demo.SelectCompetitionListRsp
         * @instance
         */
        SelectCompetitionListRsp.prototype.subscribe = 0;

        /**
         * SelectCompetitionListRsp status.
         * @member {number} status
         * @memberof demo.SelectCompetitionListRsp
         * @instance
         */
        SelectCompetitionListRsp.prototype.status = 0;

        /**
         * Creates a new SelectCompetitionListRsp instance using the specified properties.
         * @function create
         * @memberof demo.SelectCompetitionListRsp
         * @static
         * @param {demo.ISelectCompetitionListRsp=} [properties] Properties to set
         * @returns {demo.SelectCompetitionListRsp} SelectCompetitionListRsp instance
         */
        SelectCompetitionListRsp.create = function create(properties) {
            return new SelectCompetitionListRsp(properties);
        };

        /**
         * Encodes the specified SelectCompetitionListRsp message. Does not implicitly {@link demo.SelectCompetitionListRsp.verify|verify} messages.
         * @function encode
         * @memberof demo.SelectCompetitionListRsp
         * @static
         * @param {demo.ISelectCompetitionListRsp} message SelectCompetitionListRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectCompetitionListRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.competitionId != null && Object.hasOwnProperty.call(message, "competitionId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.competitionId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.matchTime != null && Object.hasOwnProperty.call(message, "matchTime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.matchTime);
            if (message.subscribe != null && Object.hasOwnProperty.call(message, "subscribe"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.subscribe);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified SelectCompetitionListRsp message, length delimited. Does not implicitly {@link demo.SelectCompetitionListRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof demo.SelectCompetitionListRsp
         * @static
         * @param {demo.ISelectCompetitionListRsp} message SelectCompetitionListRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectCompetitionListRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelectCompetitionListRsp message from the specified reader or buffer.
         * @function decode
         * @memberof demo.SelectCompetitionListRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {demo.SelectCompetitionListRsp} SelectCompetitionListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectCompetitionListRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.SelectCompetitionListRsp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.competitionId = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.matchTime = reader.string();
                        break;
                    }
                case 4: {
                        message.subscribe = reader.int32();
                        break;
                    }
                case 5: {
                        message.status = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelectCompetitionListRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof demo.SelectCompetitionListRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {demo.SelectCompetitionListRsp} SelectCompetitionListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectCompetitionListRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelectCompetitionListRsp message.
         * @function verify
         * @memberof demo.SelectCompetitionListRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelectCompetitionListRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.competitionId != null && message.hasOwnProperty("competitionId"))
                if (!$util.isInteger(message.competitionId))
                    return "competitionId: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.matchTime != null && message.hasOwnProperty("matchTime"))
                if (!$util.isString(message.matchTime))
                    return "matchTime: string expected";
            if (message.subscribe != null && message.hasOwnProperty("subscribe"))
                if (!$util.isInteger(message.subscribe))
                    return "subscribe: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a SelectCompetitionListRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof demo.SelectCompetitionListRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {demo.SelectCompetitionListRsp} SelectCompetitionListRsp
         */
        SelectCompetitionListRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.demo.SelectCompetitionListRsp)
                return object;
            let message = new $root.demo.SelectCompetitionListRsp();
            if (object.competitionId != null)
                message.competitionId = object.competitionId | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.matchTime != null)
                message.matchTime = String(object.matchTime);
            if (object.subscribe != null)
                message.subscribe = object.subscribe | 0;
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a SelectCompetitionListRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof demo.SelectCompetitionListRsp
         * @static
         * @param {demo.SelectCompetitionListRsp} message SelectCompetitionListRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelectCompetitionListRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.competitionId = 0;
                object.name = "";
                object.matchTime = "";
                object.subscribe = 0;
                object.status = 0;
            }
            if (message.competitionId != null && message.hasOwnProperty("competitionId"))
                object.competitionId = message.competitionId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.matchTime != null && message.hasOwnProperty("matchTime"))
                object.matchTime = message.matchTime;
            if (message.subscribe != null && message.hasOwnProperty("subscribe"))
                object.subscribe = message.subscribe;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this SelectCompetitionListRsp to JSON.
         * @function toJSON
         * @memberof demo.SelectCompetitionListRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelectCompetitionListRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SelectCompetitionListRsp
         * @function getTypeUrl
         * @memberof demo.SelectCompetitionListRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SelectCompetitionListRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/demo.SelectCompetitionListRsp";
        };

        return SelectCompetitionListRsp;
    })();

    demo.SelectCompetitionTeamListRsp = (function() {

        /**
         * Properties of a SelectCompetitionTeamListRsp.
         * @memberof demo
         * @interface ISelectCompetitionTeamListRsp
         * @property {number|null} [teamIndex] SelectCompetitionTeamListRsp teamIndex
         * @property {number|null} [teamId] SelectCompetitionTeamListRsp teamId
         * @property {string|null} [teamName] SelectCompetitionTeamListRsp teamName
         * @property {string|null} [teamLogo] SelectCompetitionTeamListRsp teamLogo
         */

        /**
         * Constructs a new SelectCompetitionTeamListRsp.
         * @memberof demo
         * @classdesc Represents a SelectCompetitionTeamListRsp.
         * @implements ISelectCompetitionTeamListRsp
         * @constructor
         * @param {demo.ISelectCompetitionTeamListRsp=} [properties] Properties to set
         */
        function SelectCompetitionTeamListRsp(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelectCompetitionTeamListRsp teamIndex.
         * @member {number} teamIndex
         * @memberof demo.SelectCompetitionTeamListRsp
         * @instance
         */
        SelectCompetitionTeamListRsp.prototype.teamIndex = 0;

        /**
         * SelectCompetitionTeamListRsp teamId.
         * @member {number} teamId
         * @memberof demo.SelectCompetitionTeamListRsp
         * @instance
         */
        SelectCompetitionTeamListRsp.prototype.teamId = 0;

        /**
         * SelectCompetitionTeamListRsp teamName.
         * @member {string} teamName
         * @memberof demo.SelectCompetitionTeamListRsp
         * @instance
         */
        SelectCompetitionTeamListRsp.prototype.teamName = "";

        /**
         * SelectCompetitionTeamListRsp teamLogo.
         * @member {string} teamLogo
         * @memberof demo.SelectCompetitionTeamListRsp
         * @instance
         */
        SelectCompetitionTeamListRsp.prototype.teamLogo = "";

        /**
         * Creates a new SelectCompetitionTeamListRsp instance using the specified properties.
         * @function create
         * @memberof demo.SelectCompetitionTeamListRsp
         * @static
         * @param {demo.ISelectCompetitionTeamListRsp=} [properties] Properties to set
         * @returns {demo.SelectCompetitionTeamListRsp} SelectCompetitionTeamListRsp instance
         */
        SelectCompetitionTeamListRsp.create = function create(properties) {
            return new SelectCompetitionTeamListRsp(properties);
        };

        /**
         * Encodes the specified SelectCompetitionTeamListRsp message. Does not implicitly {@link demo.SelectCompetitionTeamListRsp.verify|verify} messages.
         * @function encode
         * @memberof demo.SelectCompetitionTeamListRsp
         * @static
         * @param {demo.ISelectCompetitionTeamListRsp} message SelectCompetitionTeamListRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectCompetitionTeamListRsp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.teamIndex != null && Object.hasOwnProperty.call(message, "teamIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.teamIndex);
            if (message.teamId != null && Object.hasOwnProperty.call(message, "teamId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.teamId);
            if (message.teamName != null && Object.hasOwnProperty.call(message, "teamName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.teamName);
            if (message.teamLogo != null && Object.hasOwnProperty.call(message, "teamLogo"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.teamLogo);
            return writer;
        };

        /**
         * Encodes the specified SelectCompetitionTeamListRsp message, length delimited. Does not implicitly {@link demo.SelectCompetitionTeamListRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof demo.SelectCompetitionTeamListRsp
         * @static
         * @param {demo.ISelectCompetitionTeamListRsp} message SelectCompetitionTeamListRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectCompetitionTeamListRsp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelectCompetitionTeamListRsp message from the specified reader or buffer.
         * @function decode
         * @memberof demo.SelectCompetitionTeamListRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {demo.SelectCompetitionTeamListRsp} SelectCompetitionTeamListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectCompetitionTeamListRsp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.demo.SelectCompetitionTeamListRsp();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.teamIndex = reader.int32();
                        break;
                    }
                case 2: {
                        message.teamId = reader.int32();
                        break;
                    }
                case 3: {
                        message.teamName = reader.string();
                        break;
                    }
                case 4: {
                        message.teamLogo = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelectCompetitionTeamListRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof demo.SelectCompetitionTeamListRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {demo.SelectCompetitionTeamListRsp} SelectCompetitionTeamListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectCompetitionTeamListRsp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelectCompetitionTeamListRsp message.
         * @function verify
         * @memberof demo.SelectCompetitionTeamListRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelectCompetitionTeamListRsp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.teamIndex != null && message.hasOwnProperty("teamIndex"))
                if (!$util.isInteger(message.teamIndex))
                    return "teamIndex: integer expected";
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                if (!$util.isInteger(message.teamId))
                    return "teamId: integer expected";
            if (message.teamName != null && message.hasOwnProperty("teamName"))
                if (!$util.isString(message.teamName))
                    return "teamName: string expected";
            if (message.teamLogo != null && message.hasOwnProperty("teamLogo"))
                if (!$util.isString(message.teamLogo))
                    return "teamLogo: string expected";
            return null;
        };

        /**
         * Creates a SelectCompetitionTeamListRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof demo.SelectCompetitionTeamListRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {demo.SelectCompetitionTeamListRsp} SelectCompetitionTeamListRsp
         */
        SelectCompetitionTeamListRsp.fromObject = function fromObject(object) {
            if (object instanceof $root.demo.SelectCompetitionTeamListRsp)
                return object;
            let message = new $root.demo.SelectCompetitionTeamListRsp();
            if (object.teamIndex != null)
                message.teamIndex = object.teamIndex | 0;
            if (object.teamId != null)
                message.teamId = object.teamId | 0;
            if (object.teamName != null)
                message.teamName = String(object.teamName);
            if (object.teamLogo != null)
                message.teamLogo = String(object.teamLogo);
            return message;
        };

        /**
         * Creates a plain object from a SelectCompetitionTeamListRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof demo.SelectCompetitionTeamListRsp
         * @static
         * @param {demo.SelectCompetitionTeamListRsp} message SelectCompetitionTeamListRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelectCompetitionTeamListRsp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.teamIndex = 0;
                object.teamId = 0;
                object.teamName = "";
                object.teamLogo = "";
            }
            if (message.teamIndex != null && message.hasOwnProperty("teamIndex"))
                object.teamIndex = message.teamIndex;
            if (message.teamId != null && message.hasOwnProperty("teamId"))
                object.teamId = message.teamId;
            if (message.teamName != null && message.hasOwnProperty("teamName"))
                object.teamName = message.teamName;
            if (message.teamLogo != null && message.hasOwnProperty("teamLogo"))
                object.teamLogo = message.teamLogo;
            return object;
        };

        /**
         * Converts this SelectCompetitionTeamListRsp to JSON.
         * @function toJSON
         * @memberof demo.SelectCompetitionTeamListRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelectCompetitionTeamListRsp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SelectCompetitionTeamListRsp
         * @function getTypeUrl
         * @memberof demo.SelectCompetitionTeamListRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SelectCompetitionTeamListRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/demo.SelectCompetitionTeamListRsp";
        };

        return SelectCompetitionTeamListRsp;
    })();

    return demo;
})();

export { $root as default };
