function Grade(名称) {
    this.语文组 = [];
    this.数学组 = [];
    this.英语组 = [];
    this.政治组 = [];
    this.史地组 = [];
    this.综合组 = [];
    this.体育组 = [];
    
    this.班级 = [];
    
    this.init = function() {
        this.名称 = 名称;
        this.initTeachingGroups();
        this.initSchoolClasses();
    };
    
    this.initTeachingGroups = function() {
        this.语文组.push(new Teacher("黄曼宁"));
        this.语文组.push(new Teacher("李敦鹏"));
        this.语文组.push(new Teacher("莫尔静"));
        this.语文组.push(new Teacher("谭雨晴"));
        this.语文组.push(new Teacher("吴秋丁"));
        this.语文组.push(new Teacher("杨爱彬"));

        this.数学组.push(new Teacher("符裕奇"));
        this.数学组.push(new Teacher("林开富"));
        this.数学组.push(new Teacher("刘隽"));
        this.数学组.push(new Teacher("庞伟"));

        this.英语组.push(new Teacher("陈荟花"));
        this.英语组.push(new Teacher("陈小娟"));
        this.英语组.push(new Teacher("林翔圳"));
        this.英语组.push(new Teacher("苏雅馨"));
        this.英语组.push(new Teacher("唐玉珊"));
        this.英语组.push(new Teacher("郑芳雅"));

        this.政治组.push(new Teacher("蔡于锋"));
        this.政治组.push(new Teacher("李改芬"));

        this.史地组.push(new Teacher("陈红霞"));
        this.史地组.push(new Teacher("陈灵丁"));
        this.史地组.push(new Teacher("黄彩珍"));
        this.史地组.push(new Teacher("李儒伟"));
        this.史地组.push(new Teacher("郑莉"));

        this.综合组.push(new Teacher("冯学安"));
        this.综合组.push(new Teacher("李源袆"));
        this.综合组.push(new Teacher("刘健"));
        this.综合组.push(new Teacher("卢国兴"));
        this.综合组.push(new Teacher("莫健珠"));
        this.综合组.push(new Teacher("王琴"));
        this.综合组.push(new Teacher("文华锋"));
        this.综合组.push(new Teacher("吴颖"));
        this.综合组.push(new Teacher("朱俊玮"));

        this.体育组.push(new Teacher("韩向军"));
        this.体育组.push(new Teacher("林朝霞"));
    };
    
    this.initSchoolClasses = function() {
        var schoolClass;

        schoolClass = new SchoolClass(1, this.getTeacherFromName("莫尔静"));
        schoolClass.setCourseTeacher("语文", this.getTeacherFromName("莫尔静"));
        schoolClass.setCourseTeacher("数学", this.getTeacherFromName("符裕奇"));
        schoolClass.setCourseTeacher("英语", this.getTeacherFromName("陈小娟"));
        schoolClass.setCourseTeacher("生物", this.getTeacherFromName("文华锋"));
        schoolClass.setCourseTeacher("历史", this.getTeacherFromName("郑莉"));
        schoolClass.setCourseTeacher("地理", this.getTeacherFromName("黄彩珍"));
        schoolClass.setCourseTeacher("美术", this.getTeacherFromName("吴颖"));
        schoolClass.setCourseTeacher("音乐", this.getTeacherFromName("李源袆"));
        schoolClass.setCourseTeacher("政治", this.getTeacherFromName("蔡于锋"));
        schoolClass.setCourseTeacher("体育", this.getTeacherFromName("林朝霞"));
        schoolClass.setCourseTeacher("信息技术", this.getTeacherFromName("莫健珠"));
        schoolClass.setCourseTeacher("写字", this.getTeacherFromName("冯学安"));
        schoolClass.setCourseTeacher("心理", this.getTeacherFromName("刘健"));
        
        schoolClass.addStudent(new Student("鲍奕坤", "男"));
        schoolClass.addStudent(new Student("陈锦宇", "男"));
        schoolClass.addStudent(new Student("陈显凡", "男"));
        schoolClass.addStudent(new Student("陈宥玮", "男"));
        schoolClass.addStudent(new Student("戴家乐", "男"));
        schoolClass.addStudent(new Student("符谷基", "男"));
        schoolClass.addStudent(new Student("郭天阳", "男"));
        schoolClass.addStudent(new Student("候玺伦", "男"));
        schoolClass.addStudent(new Student("黄堂卫", "男"));
        schoolClass.addStudent(new Student("李奥博", "男"));
        schoolClass.addStudent(new Student("李先国", "男"));
        schoolClass.addStudent(new Student("梁健新", "男"));
        schoolClass.addStudent(new Student("罗俊豪", "男"));
        schoolClass.addStudent(new Student("莫耀翔", "男"));
        schoolClass.addStudent(new Student("苏运锴", "男"));
        schoolClass.addStudent(new Student("唐蔚良", "男"));
        schoolClass.addStudent(new Student("王海清", "男"));
        schoolClass.addStudent(new Student("吴槟楠", "男"));
        schoolClass.addStudent(new Student("吴宇", "男"));
        schoolClass.addStudent(new Student("邢增益", "男"));
        schoolClass.addStudent(new Student("杨康瑞", "男"));
        schoolClass.addStudent(new Student("叶长泓", "男"));
        schoolClass.addStudent(new Student("张宇茂", "男"));
        schoolClass.addStudent(new Student("周召栋", "男"));
        
        schoolClass.addStudent(new Student("陈梓泓", "女"));
        schoolClass.addStudent(new Student("符曼妮", "女"));
        schoolClass.addStudent(new Student("胡其巧", "女"));
        schoolClass.addStudent(new Student("黄雨萱", "女"));
        schoolClass.addStudent(new Student("李婉祯", "女"));
        schoolClass.addStudent(new Student("林思妤", "女"));
        schoolClass.addStudent(new Student("骆怡静", "女"));
        schoolClass.addStudent(new Student("莫如璇", "女"));
        schoolClass.addStudent(new Student("彭安欣", "女"));
        schoolClass.addStudent(new Student("唐静轩", "女"));
        schoolClass.addStudent(new Student("王一琳", "女"));
        schoolClass.addStudent(new Student("吴洁怡", "女"));
        schoolClass.addStudent(new Student("肖佳佳", "女"));
        schoolClass.addStudent(new Student("杨晨", "女"));
        schoolClass.addStudent(new Student("张楠", "女"));
        schoolClass.addStudent(new Student("张满钰", "女"));
        schoolClass.addStudent(new Student("钟远宜", "女"));

        this.addClass(schoolClass);

        schoolClass = new SchoolClass(2, this.getTeacherFromName("符裕奇"));
        schoolClass.setCourseTeacher("语文", this.getTeacherFromName("谭雨晴"));
        schoolClass.setCourseTeacher("数学", this.getTeacherFromName("符裕奇"));
        schoolClass.setCourseTeacher("英语", this.getTeacherFromName("陈小娟"));
        schoolClass.setCourseTeacher("生物", this.getTeacherFromName("文华锋"));
        schoolClass.setCourseTeacher("历史", this.getTeacherFromName("郑莉"));
        schoolClass.setCourseTeacher("地理", this.getTeacherFromName("黄彩珍"));
        schoolClass.setCourseTeacher("美术", this.getTeacherFromName("吴颖"));
        schoolClass.setCourseTeacher("音乐", this.getTeacherFromName("李源袆"));
        schoolClass.setCourseTeacher("政治", this.getTeacherFromName("蔡于锋"));
        schoolClass.setCourseTeacher("体育", this.getTeacherFromName("林朝霞"));
        schoolClass.setCourseTeacher("信息技术", this.getTeacherFromName("莫健珠"));
        schoolClass.setCourseTeacher("写字", this.getTeacherFromName("冯学安"));
        schoolClass.setCourseTeacher("心理", this.getTeacherFromName("刘健"));
        
        schoolClass.addStudent(new Student("闭永康", "男"));
        schoolClass.addStudent(new Student("曾彦凯", "男"));
        schoolClass.addStudent(new Student("陈霄亮", "男"));
        schoolClass.addStudent(new Student("陈昀邑", "男"));
        schoolClass.addStudent(new Student("邓成辉", "男"));
        schoolClass.addStudent(new Student("符鸿涛", "男"));
        schoolClass.addStudent(new Student("韩喜畴", "男"));
        schoolClass.addStudent(new Student("韩永晶", "男"));
        schoolClass.addStudent(new Student("黄梓皓", "男"));
        schoolClass.addStudent(new Student("吉彦伯", "男"));
        schoolClass.addStudent(new Student("林先宇", "男"));
        schoolClass.addStudent(new Student("欧阳润", "男"));
        schoolClass.addStudent(new Student("孙天福", "男"));
        schoolClass.addStudent(new Student("唐一夫", "男"));
        schoolClass.addStudent(new Student("王瑜钊", "男"));
        schoolClass.addStudent(new Student("吴多沅", "男"));
        schoolClass.addStudent(new Student("吴宇森", "男"));
        schoolClass.addStudent(new Student("谢海裕", "男"));
        schoolClass.addStudent(new Student("杨钦翰", "男"));
        schoolClass.addStudent(new Student("叶子豪", "男"));
        schoolClass.addStudent(new Student("张子恒", "男"));
        
        schoolClass.addStudent(new Student("陈佳敏", "女"));
        schoolClass.addStudent(new Student("陈相君", "女"));
        schoolClass.addStudent(new Student("陈雨汐", "女"));
        schoolClass.addStudent(new Student("关婷婷", "女"));
        schoolClass.addStudent(new Student("郭彦宏", "女"));
        schoolClass.addStudent(new Student("黄榆敏", "女"));
        schoolClass.addStudent(new Student("林静宇", "女"));
        schoolClass.addStudent(new Student("罗丽萍", "女"));
        schoolClass.addStudent(new Student("孟琬清", "女"));
        schoolClass.addStudent(new Student("庞雯文", "女"));
        schoolClass.addStudent(new Student("唐轩", "女"));
        schoolClass.addStudent(new Student("王佳仪", "女"));
        schoolClass.addStudent(new Student("王旭", "女"));
        schoolClass.addStudent(new Student("王阳钰", "女"));
        schoolClass.addStudent(new Student("肖淋", "女"));
        schoolClass.addStudent(new Student("徐小仪", "女"));
        schoolClass.addStudent(new Student("云涓", "女"));
        
        this.addClass(schoolClass);

        schoolClass = new SchoolClass(3, this.getTeacherFromName("苏雅馨"));
        schoolClass.setCourseTeacher("语文", this.getTeacherFromName("杨爱彬"));
        schoolClass.setCourseTeacher("数学", this.getTeacherFromName("刘隽"));
        schoolClass.setCourseTeacher("英语", this.getTeacherFromName("苏雅馨"));
        schoolClass.setCourseTeacher("生物", this.getTeacherFromName("文华锋"));
        schoolClass.setCourseTeacher("历史", this.getTeacherFromName("郑莉"));
        schoolClass.setCourseTeacher("地理", this.getTeacherFromName("黄彩珍"));
        schoolClass.setCourseTeacher("美术", this.getTeacherFromName("吴颖"));
        schoolClass.setCourseTeacher("音乐", this.getTeacherFromName("李源袆"));
        schoolClass.setCourseTeacher("政治", this.getTeacherFromName("蔡于锋"));
        schoolClass.setCourseTeacher("体育", this.getTeacherFromName("林朝霞"));
        schoolClass.setCourseTeacher("信息技术", this.getTeacherFromName("莫健珠"));
        schoolClass.setCourseTeacher("写字", this.getTeacherFromName("冯学安"));
        schoolClass.setCourseTeacher("心理", this.getTeacherFromName("刘健"));
        
        schoolClass.addStudent(new Student("杨锦鸿", "男"));
        schoolClass.addStudent(new Student("杨泽伦", "男"));
        schoolClass.addStudent(new Student("王皓麟", "男"));
        schoolClass.addStudent(new Student("李邦凯", "男"));
        schoolClass.addStudent(new Student("吴子旭", "男"));
        schoolClass.addStudent(new Student("解禹泽", "男"));
        schoolClass.addStudent(new Student("洪睿", "男"));
        schoolClass.addStudent(new Student("庄国策", "男"));
        schoolClass.addStudent(new Student("孙笠镤", "男"));
        schoolClass.addStudent(new Student("段泓成", "男"));
        schoolClass.addStudent(new Student("秦意刚", "男"));
        schoolClass.addStudent(new Student("杨浚淏", "男"));
        schoolClass.addStudent(new Student("张艺潇", "男"));
        schoolClass.addStudent(new Student("金浩然", "男"));
        schoolClass.addStudent(new Student("程作宇", "男"));
        schoolClass.addStudent(new Student("李海山", "男"));
        schoolClass.addStudent(new Student("许可健", "男"));
        
        schoolClass.addStudent(new Student("衡眉", "女"));
        schoolClass.addStudent(new Student("梁佳恒", "女"));
        schoolClass.addStudent(new Student("杨敏燕", "女"));
        schoolClass.addStudent(new Student("谭雨欣", "女"));
        schoolClass.addStudent(new Student("孙菁", "女"));
        schoolClass.addStudent(new Student("程池", "女"));
        schoolClass.addStudent(new Student("李想", "女"));
        schoolClass.addStudent(new Student("洪阳", "女"));
        schoolClass.addStudent(new Student("黄思语", "女"));
        schoolClass.addStudent(new Student("罗娴", "女"));
        schoolClass.addStudent(new Student("朱敏敏", "女"));
        schoolClass.addStudent(new Student("王舒艺", "女"));
        schoolClass.addStudent(new Student("肖旻雯", "女"));
        schoolClass.addStudent(new Student("孔维一", "女"));
        schoolClass.addStudent(new Student("季皖渝", "女"));
        schoolClass.addStudent(new Student("林倩如", "女"));
        schoolClass.addStudent(new Student("杨仁洁", "女"));
        schoolClass.addStudent(new Student("祝亚桐", "女"));
        schoolClass.addStudent(new Student("曾佳琳", "女"));
        schoolClass.addStudent(new Student("陈俊桦", "女"));
        
        this.addClass(schoolClass);

        schoolClass = new SchoolClass(4, this.getTeacherFromName("黄曼宁"));
        schoolClass.setCourseTeacher("语文", this.getTeacherFromName("黄曼宁"));
        schoolClass.setCourseTeacher("数学", this.getTeacherFromName("刘隽"));
        schoolClass.setCourseTeacher("英语", this.getTeacherFromName("陈荟花"));
        schoolClass.setCourseTeacher("生物", this.getTeacherFromName("卢国兴"));
        schoolClass.setCourseTeacher("历史", this.getTeacherFromName("李儒伟"));
        schoolClass.setCourseTeacher("地理", this.getTeacherFromName("黄彩珍"));
        schoolClass.setCourseTeacher("美术", this.getTeacherFromName("吴颖"));
        schoolClass.setCourseTeacher("音乐", this.getTeacherFromName("李源袆"));
        schoolClass.setCourseTeacher("政治", this.getTeacherFromName("蔡于锋"));
        schoolClass.setCourseTeacher("体育", this.getTeacherFromName("林朝霞"));
        schoolClass.setCourseTeacher("信息技术", this.getTeacherFromName("莫健珠"));
        schoolClass.setCourseTeacher("写字", this.getTeacherFromName("冯学安"));
        schoolClass.setCourseTeacher("心理", this.getTeacherFromName("刘健"));
        
        schoolClass.addStudent(new Student("蔡友", "男"));
        schoolClass.addStudent(new Student("陈崇裕", "男"));
        schoolClass.addStudent(new Student("陈俊儒", "男"));
        schoolClass.addStudent(new Student("陈烊壮", "男"));
        schoolClass.addStudent(new Student("陈在海", "男"));
        schoolClass.addStudent(new Student("董晟祺", "男"));
        schoolClass.addStudent(new Student("符志海", "男"));
        schoolClass.addStudent(new Student("黄宸", "男"));
        schoolClass.addStudent(new Student("吉家琛", "男"));
        schoolClass.addStudent(new Student("李传华", "男"));
        schoolClass.addStudent(new Student("梁其洲", "男"));
        schoolClass.addStudent(new Student("吕书丞", "男"));
        schoolClass.addStudent(new Student("潘家宽", "男"));
        schoolClass.addStudent(new Student("唐英议", "男"));
        schoolClass.addStudent(new Student("王金鲍", "男"));
        schoolClass.addStudent(new Student("王振浩", "男"));
        schoolClass.addStudent(new Student("吴毓瑞", "男"));
        schoolClass.addStudent(new Student("喻至嵘", "男"));
        schoolClass.addStudent(new Student("郑隆", "男"));
        schoolClass.addStudent(new Student("郑天僖", "男"));
        schoolClass.addStudent(new Student("祝康", "男"));
        schoolClass.addStudent(new Student("韩伟杰", "男"));
        schoolClass.addStudent(new Student("廖鹏", "男"));
        
        schoolClass.addStudent(new Student("陈婕", "女"));
        schoolClass.addStudent(new Student("陈依仪", "女"));
        schoolClass.addStudent(new Student("何彬彬", "女"));
        schoolClass.addStudent(new Student("黄心怡", "女"));
        schoolClass.addStudent(new Student("李琳", "女"));
        schoolClass.addStudent(new Student("梁钰偲", "女"));
        schoolClass.addStudent(new Student("陆玫伶", "女"));
        schoolClass.addStudent(new Student("蒙王妃", "女"));
        schoolClass.addStudent(new Student("潘朵拉", "女"));
        schoolClass.addStudent(new Student("覃飞钰", "女"));
        schoolClass.addStudent(new Student("谭翘", "女"));
        schoolClass.addStudent(new Student("王邦谊", "女"));
        schoolClass.addStudent(new Student("翁小珺", "女"));
        schoolClass.addStudent(new Student("刘心岚", "女"));
        schoolClass.addStudent(new Student("徐静怡", "女"));
        schoolClass.addStudent(new Student("余湘湘", "女"));
        schoolClass.addStudent(new Student("郑晴璐", "女"));
        
        this.addClass(schoolClass);

        schoolClass = new SchoolClass(5, this.getTeacherFromName("卢国兴"));
        schoolClass.setCourseTeacher("语文", this.getTeacherFromName("李敦鹏"));
        schoolClass.setCourseTeacher("数学", this.getTeacherFromName("庞伟"));
        schoolClass.setCourseTeacher("英语", this.getTeacherFromName("陈荟花"));
        schoolClass.setCourseTeacher("生物", this.getTeacherFromName("卢国兴"));
        schoolClass.setCourseTeacher("历史", this.getTeacherFromName("李儒伟"));
        schoolClass.setCourseTeacher("地理", this.getTeacherFromName("陈红霞"));
        schoolClass.setCourseTeacher("美术", this.getTeacherFromName("吴颖"));
        schoolClass.setCourseTeacher("音乐", this.getTeacherFromName("王琴"));
        schoolClass.setCourseTeacher("政治", this.getTeacherFromName("蔡于锋"));
        schoolClass.setCourseTeacher("体育", this.getTeacherFromName("韩向军"));
        schoolClass.setCourseTeacher("信息技术", this.getTeacherFromName("莫健珠"));
        schoolClass.setCourseTeacher("写字", this.getTeacherFromName("冯学安"));
        schoolClass.setCourseTeacher("心理", this.getTeacherFromName("刘健"));
        
        schoolClass.addStudent(new Student("蔡劲鸿 ", "男"));
        schoolClass.addStudent(new Student("陈大纬", "男"));
        schoolClass.addStudent(new Student("陈尚余", "男"));
        schoolClass.addStudent(new Student("陈一赫", "男"));
        schoolClass.addStudent(new Student("陈泽斐", "男"));
        schoolClass.addStudent(new Student("方育", "男"));
        schoolClass.addStudent(new Student("傅佑杰", "男"));
        schoolClass.addStudent(new Student("何浩宾", "男"));
        schoolClass.addStudent(new Student("黄崇铭", "男"));
        schoolClass.addStudent(new Student("简德弦", "男"));
        schoolClass.addStudent(new Student("李斯家", "男"));
        schoolClass.addStudent(new Student("梁振华", "男"));
        schoolClass.addStudent(new Student("林展鹏", "男"));
        schoolClass.addStudent(new Student("蒙钟程", "男"));
        schoolClass.addStudent(new Student("彭嘉诚", "男"));
        schoolClass.addStudent(new Student("王邦颉", "男"));
        schoolClass.addStudent(new Student("王子文", "男"));
        schoolClass.addStudent(new Student("吴俊樘", "男"));
        schoolClass.addStudent(new Student("徐川洲", "男"));
        schoolClass.addStudent(new Student("杨洋", "男"));
        schoolClass.addStudent(new Student("张程", "男"));
        schoolClass.addStudent(new Student("郑敦程", "男"));
        schoolClass.addStudent(new Student("郑君浩", "男"));
        schoolClass.addStudent(new Student("郑宇新", "男"));
        schoolClass.addStudent(new Student("庄国德", "男"));
        schoolClass.addStudent(new Student("谢嘉城", "男"));
        schoolClass.addStudent(new Student("吴淑伦", "男"));
        
        schoolClass.addStudent(new Student("陈嘉", "女"));
        schoolClass.addStudent(new Student("符宝蓉", "女"));
        schoolClass.addStudent(new Student("黄晓曦", "女"));
        schoolClass.addStudent(new Student("梁迅", "女"));
        schoolClass.addStudent(new Student("柳晓颖", "女"));
        schoolClass.addStudent(new Student("马钰", "女"));
        schoolClass.addStudent(new Student("欧一瑄", "女"));
        schoolClass.addStudent(new Student("王敏", "女"));
        schoolClass.addStudent(new Student("王彤", "女"));
        schoolClass.addStudent(new Student("翁慧琳", "女"));
        schoolClass.addStudent(new Student("夏铭源", "女"));
        schoolClass.addStudent(new Student("邢钰佳", "女"));
        
        this.addClass(schoolClass);

        schoolClass = new SchoolClass(6, this.getTeacherFromName("林翔圳"));
        schoolClass.setCourseTeacher("语文", this.getTeacherFromName("李敦鹏"));
        schoolClass.setCourseTeacher("数学", this.getTeacherFromName("庞伟"));
        schoolClass.setCourseTeacher("英语", this.getTeacherFromName("林翔圳"));
        schoolClass.setCourseTeacher("生物", this.getTeacherFromName("朱俊玮"));
        schoolClass.setCourseTeacher("历史", this.getTeacherFromName("李儒伟"));
        schoolClass.setCourseTeacher("地理", this.getTeacherFromName("陈红霞"));
        schoolClass.setCourseTeacher("美术", this.getTeacherFromName("吴颖"));
        schoolClass.setCourseTeacher("音乐", this.getTeacherFromName("王琴"));
        schoolClass.setCourseTeacher("政治", this.getTeacherFromName("李改芬"));
        schoolClass.setCourseTeacher("体育", this.getTeacherFromName("韩向军"));
        schoolClass.setCourseTeacher("信息技术", this.getTeacherFromName("莫健珠"));
        schoolClass.setCourseTeacher("写字", this.getTeacherFromName("冯学安"));
        schoolClass.setCourseTeacher("心理", this.getTeacherFromName("刘健"));
        
        schoolClass.addStudent(new Student("曾垂奋", "男"));
        schoolClass.addStudent(new Student("陈泓宇", "男"));
        schoolClass.addStudent(new Student("陈世杰", "男"));
        schoolClass.addStudent(new Student("陈颖宇", "男"));
        schoolClass.addStudent(new Student("陈志函", "男"));
        schoolClass.addStudent(new Student("冯学鸿", "男"));
        schoolClass.addStudent(new Student("何声言", "男"));
        schoolClass.addStudent(new Student("黄宏壮", "男"));
        schoolClass.addStudent(new Student("李涛", "男"));
        schoolClass.addStudent(new Student("李志铿", "男"));
        schoolClass.addStudent(new Student("林炽", "男"));
        schoolClass.addStudent(new Student("刘顺涛", "男"));
        schoolClass.addStudent(new Student("莫晋", "男"));
        schoolClass.addStudent(new Student("史贵伟", "男"));
        schoolClass.addStudent(new Student("唐浩", "男"));
        schoolClass.addStudent(new Student("王丁乐", "男"));
        schoolClass.addStudent(new Student("王梓钰", "男"));
        schoolClass.addStudent(new Student("吴其鸿", "男"));
        schoolClass.addStudent(new Student("徐锴智", "男"));
        schoolClass.addStudent(new Student("杨祖源", "男"));
        schoolClass.addStudent(new Student("张家瑋", "男"));
        schoolClass.addStudent(new Student("郑涵", "男"));
        schoolClass.addStudent(new Student("周国豪", "男"));
        schoolClass.addStudent(new Student("庄铭浩", "男"));
        schoolClass.addStudent(new Student("何昌泰", "男"));
        
        schoolClass.addStudent(new Student("陈宣谷", "女"));
        schoolClass.addStudent(new Student("冯慧璇", "女"));
        schoolClass.addStudent(new Student("葛净彤", "女"));
        schoolClass.addStudent(new Student("黄诗涵", "女"));
        schoolClass.addStudent(new Student("连婧羽", "女"));
        schoolClass.addStudent(new Student("刘欣洁", "女"));
        schoolClass.addStudent(new Student("聂淼", "女"));
        schoolClass.addStudent(new Student("宋晓芬", "女"));
        schoolClass.addStudent(new Student("涂文馨", "女"));
        schoolClass.addStudent(new Student("王梓凝", "女"));
        schoolClass.addStudent(new Student("温紫翠", "女"));
        schoolClass.addStudent(new Student("吴英玲", "女"));
        schoolClass.addStudent(new Student("杨夏瑜", "女"));
        schoolClass.addStudent(new Student("张铁凌", "女"));
        schoolClass.addStudent(new Student("左雨穗", "女"));
        schoolClass.addStudent(new Student("王思尹", "女"));
        
        this.addClass(schoolClass);

        schoolClass = new SchoolClass(7, this.getTeacherFromName("李改芬"));
        schoolClass.setCourseTeacher("语文", this.getTeacherFromName("吴秋丁"));
        schoolClass.setCourseTeacher("数学", this.getTeacherFromName("林开富"));
        schoolClass.setCourseTeacher("英语", this.getTeacherFromName("唐玉珊"));
        schoolClass.setCourseTeacher("生物", this.getTeacherFromName("朱俊玮"));
        schoolClass.setCourseTeacher("历史", this.getTeacherFromName("陈灵丁"));
        schoolClass.setCourseTeacher("地理", this.getTeacherFromName("陈红霞"));
        schoolClass.setCourseTeacher("美术", this.getTeacherFromName("吴颖"));
        schoolClass.setCourseTeacher("音乐", this.getTeacherFromName("王琴"));
        schoolClass.setCourseTeacher("政治", this.getTeacherFromName("李改芬"));
        schoolClass.setCourseTeacher("体育", this.getTeacherFromName("韩向军"));
        schoolClass.setCourseTeacher("信息技术", this.getTeacherFromName("莫健珠"));
        schoolClass.setCourseTeacher("写字", this.getTeacherFromName("冯学安"));
        schoolClass.setCourseTeacher("心理", this.getTeacherFromName("刘健"));
        
        schoolClass.addStudent(new Student("史运炜", "男"));
        schoolClass.addStudent(new Student("高忠俊", "男"));
        schoolClass.addStudent(new Student("雷宝墨", "男"));
        schoolClass.addStudent(new Student("郑建辉", "男"));
        schoolClass.addStudent(new Student("陈智远", "男"));
        schoolClass.addStudent(new Student("梁超文", "男"));
        schoolClass.addStudent(new Student("何宇承", "男"));
        schoolClass.addStudent(new Student("薛智耀", "男"));
        schoolClass.addStudent(new Student("王定宇", "男"));
        schoolClass.addStudent(new Student("符芳源", "男"));
        schoolClass.addStudent(new Student("刘元阡", "男"));
        schoolClass.addStudent(new Student("曾竑源", "男"));
        schoolClass.addStudent(new Student("严教豪", "男"));
        schoolClass.addStudent(new Student("陈汲极", "男"));
        schoolClass.addStudent(new Student("温韩飞", "男"));
        schoolClass.addStudent(new Student("林明超", "男"));
        schoolClass.addStudent(new Student("武博仲", "男"));
        schoolClass.addStudent(new Student("张荣晔", "男"));
        schoolClass.addStudent(new Student("左一睿", "男"));
        schoolClass.addStudent(new Student("唐才乐", "男"));
        schoolClass.addStudent(new Student("吴树良", "男"));
        schoolClass.addStudent(new Student("陈思宇", "男"));
        schoolClass.addStudent(new Student("李文博", "男"));
        schoolClass.addStudent(new Student("周家旺", "男"));
        
        schoolClass.addStudent(new Student("王茹", "女"));
        schoolClass.addStudent(new Student("黄今畅", "女"));
        schoolClass.addStudent(new Student("唐欣怡", "女"));
        schoolClass.addStudent(new Student("王霖", "女"));
        schoolClass.addStudent(new Student("陈思好", "女"));
        schoolClass.addStudent(new Student("佘家宜", "女"));
        schoolClass.addStudent(new Student("方雪蓉", "女"));
        schoolClass.addStudent(new Student("杨雯婷", "女"));
        schoolClass.addStudent(new Student("符雅雯", "女"));
        schoolClass.addStudent(new Student("王源", "女"));
        schoolClass.addStudent(new Student("曹歆然", "女"));
        schoolClass.addStudent(new Student("牟桐瑶", "女"));
        schoolClass.addStudent(new Student("曹玥", "女"));
        schoolClass.addStudent(new Student("王雪玲", "女"));
        
        this.addClass(schoolClass);

        schoolClass = new SchoolClass(8, this.getTeacherFromName("郑芳雅"));
        schoolClass.setCourseTeacher("语文", this.getTeacherFromName("吴秋丁"));
        schoolClass.setCourseTeacher("数学", this.getTeacherFromName("林开富"));
        schoolClass.setCourseTeacher("英语", this.getTeacherFromName("郑芳雅"));
        schoolClass.setCourseTeacher("生物", this.getTeacherFromName("朱俊玮"));
        schoolClass.setCourseTeacher("历史", this.getTeacherFromName("陈灵丁"));
        schoolClass.setCourseTeacher("地理", this.getTeacherFromName("陈红霞"));
        schoolClass.setCourseTeacher("美术", this.getTeacherFromName("吴颖"));
        schoolClass.setCourseTeacher("音乐", this.getTeacherFromName("王琴"));
        schoolClass.setCourseTeacher("政治", this.getTeacherFromName("李改芬"));
        schoolClass.setCourseTeacher("体育", this.getTeacherFromName("韩向军"));
        schoolClass.setCourseTeacher("信息技术", this.getTeacherFromName("莫健珠"));
        schoolClass.setCourseTeacher("写字", this.getTeacherFromName("冯学安"));
        schoolClass.setCourseTeacher("心理", this.getTeacherFromName("刘健"));
        
        schoolClass.addStudent(new Student("曾令杰", "男"));
        schoolClass.addStudent(new Student("陈继聪", "男"));
        schoolClass.addStudent(new Student("陈伟鹏", "男"));
        schoolClass.addStudent(new Student("程俊喆", "男"));
        schoolClass.addStudent(new Student("符芳卓", "男"));
        schoolClass.addStudent(new Student("符祺琳", "男"));
        schoolClass.addStudent(new Student("洪智贤", "男"));
        schoolClass.addStudent(new Student("黎宇翔", "男"));
        schoolClass.addStudent(new Student("李文潮", "男"));
        schoolClass.addStudent(new Student("林祺超", "男"));
        schoolClass.addStudent(new Student("龙俊腾", "男"));
        schoolClass.addStudent(new Student("罗荏", "男"));
        schoolClass.addStudent(new Student("莫僮深", "男"));
        schoolClass.addStudent(new Student("苏利拓", "男"));
        schoolClass.addStudent(new Student("唐嘉豪", "男"));
        schoolClass.addStudent(new Student("王国阳", "男"));
        schoolClass.addStudent(new Student("王平语", "男"));
        schoolClass.addStudent(new Student("吴涵", "男"));
        schoolClass.addStudent(new Student("吴挺梁", "男"));
        schoolClass.addStudent(new Student("冼康一", "男"));
        schoolClass.addStudent(new Student("严教昕", "男"));
        schoolClass.addStudent(new Student("周奕轩", "男"));
        schoolClass.addStudent(new Student("方浩", "男"));
        
        schoolClass.addStudent(new Student("陈堇墨", "女"));
        schoolClass.addStudent(new Student("范馨予", "女"));
        schoolClass.addStudent(new Student("黄彩玲", "女"));
        schoolClass.addStudent(new Student("黄子圆", "女"));
        schoolClass.addStudent(new Student("李欣瑶", "女"));
        schoolClass.addStudent(new Student("林艺精", "女"));
        schoolClass.addStudent(new Student("莫耘菲", "女"));
        schoolClass.addStudent(new Student("任琪潼", "女"));
        schoolClass.addStudent(new Student("唐欣妍", "女"));
        schoolClass.addStudent(new Student("王蕾", "女"));
        schoolClass.addStudent(new Student("符惠淋", "女"));
        schoolClass.addStudent(new Student("肖茜", "女"));
        schoolClass.addStudent(new Student("杨珊", "女"));
        schoolClass.addStudent(new Student("张渝", "女"));
        schoolClass.addStudent(new Student("周梦琳", "女"));
        schoolClass.addStudent(new Student("杜婉茹", "女"));
        
        this.addClass(schoolClass);
    };
    
    this.addClass = function(schoolClass) {
        this.班级.push(schoolClass);
    };
    
    this.getTeacherFromName = function(name) {
        var propNames = ["语文组", "数学组", "英语组", "政治组", "史地组", "综合组", "体育组"];
        
        for (var i = 0; i < propNames.length; i++) {
             var prop = this[propNames[i]];
            for (var j = 0; j < prop.length; j++) {
                if (prop[j].姓名 === name) {
                    return prop[j];
                }
            }
        }
    };
    
    this.getTeachersNumForGroup = function(groupName) {
        return this[groupName].length;
    };
    
    this.getTeachersInClasses = function(courseName) {
        var obj = {};
        
        for (var i = 0; i < this.班级.length; i++) {
            var teacher = this.班级[i][courseName + "老师"];
            var classId = this.班级[i].id;
            
            if (!obj[teacher.姓名]) {
                obj[teacher.姓名] = [];
            }
            
            obj[teacher.姓名].push(classId);
        }
        
        return obj;
    };
    
    this.getClass = function(id) {
        for (var index in this.班级) {
            if (this.班级[index].id === id) {
                return this.班级[index];
            }
        }
    };
    
    this.init();
}