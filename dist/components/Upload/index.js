import Dragger from "./dragger";
import Upload from "./upload";
import UploadList from "./UploadList";
var TransUpload = Upload;
TransUpload.List = UploadList;
TransUpload.Dragger = Dragger;
export default TransUpload;
