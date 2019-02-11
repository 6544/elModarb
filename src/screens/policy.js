import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, I18nManager, ScrollView } from "react-native";
import { Card, CardItem, Container, Content } from "native-base";
import { CustomButton } from "../Ui/customButon";
import localization from "../localization/localization";
import { Colors } from "../assets/colors";
import { ImageLogo } from "../Ui/imageLogo";
import { HeaderScreen } from "../Ui/Header";
import { HeaderWithoutButtons } from "../Ui/headerWithoutButtons";
export class Policy extends Component {
    render() {
        return (

            <Container style={styles.container}>
                <HeaderWithoutButtons navigation={this.props.navigation} />
                <Content>

                    <Card style={{ flex: 0.07 }}>
                        <CardItem>
                            <Text style={styles.trainingCenterCardItem}>
                                {localization.policyUse}
                            </Text>
                        </CardItem>
                    </Card>
                    <ScrollView>
                        <Text style={{ color: Colors.white, marginLeft: '5%', marginTop: '2%' }}>تنويه : </Text>

                        <View>
                            <Text style={{ marginLeft: '2%', marginTop: '5%', color: Colors.white }}>
                                إنطلقت "مجموعة المدرب العربي" منذ العام 2007 م، كعلامة تجارية من خلال مجموعة من المدربين بقيادة المستشار مصطفى إسبر والمستشار عبد العزيز المرزن وأول أعمالها إصدار "مجلة المدرب العربي" عام 2009 م وهي مستمرة في إصداراتها وخدماتها لمجتمع التدريب .
             </Text>

                        </View>
                        <View style={{ marginTop: '5%', marginLeft: '2%' }}>

                            <Text style={{ flexWrap: 'wrap', alignSelf: 'center', color: Colors.white }}>
                                نأسف أن هناك من استخدم اسم "المدرب العربي" بدون وجه حق في إنشاء أعمال ونسخ أفكار تعود لنا
                    </Text>
                        </View>

                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>
                            أولاً : سياسة الخصوصية
                    </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>

                                نلتزم في «تطبيق المدرب العربي» بحماية خصوصية الأعضاء والزوار الكرام، فيما يلي بيان السياسة التي تنتهجها إدارة التطبيق تجاه قاعدة البيانات وكيفية استخدامها بشكل أفضل، أثناء الاستفادة من خدمات التطبيق .
                                باستخدامك لـ: «تطبيق المدرب العربي» فإنك توافق على شروط سياسة الخصوصية هذه .
                                يرجى قراءة البنود التالية بعناية لكي تُكَوِّنْ فكرة واضحة عن تلك السياسة لدينا .
                                يحتوي التطبيق على :

                        </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                1) الأعضاء الفاعلين أو مقدمي الخدمات وهم «المدربين والمستشارين ومراكز التدريب ومراكز الاستشارات» أو بشكل أدق «مجتمع التدريب والاستشارات» .
                        </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                2) الزوار المتصفحين للتطبيق والراغبين في الاستفادة من خدماته وهم المجتمع بصورة عامة والمهتمين والباحثين عن خدمات التدريب والاستشارات بصورة خاصة بدون أن يكونوا أعضاء فاعلين داخل التطبيق .


                        </Text>
                        </View>
                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>
                            ثانيا ً: المعلومات المطلوبة
                    </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                (1) معلومات خاصة بمقدمي الخدمات "مجتمع التدريب والاستشارات" من مدربين ومستشارين ومراكز تدريب واستشارات .
                    </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                (2) معلومات خاصة بزوار الموقع والمستفيدين من خدماته .
                 </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                وذلك من خلال نموذج التسجيل في التطبيق حيث ستكون كافة معلوماتك تحت إدارتك بشكل مباشر ويمكنك تعديلها بشكل شخصي ولا يمكن لأحد أن يطلع عليها ما لم تقم بالموافقة على ما تريد نشره أو الاطلاع عليه من قبل الآخرين من خلال تعبئة النموذج والضغط على خانة تفعيل الرابط الخاص بالتواصل
                               الاجتماعي الخاص بك.
                 </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }} >

                                وسائل التواصل المتاحة في التطبيق هي لتسهيل التواصل معك من قبل الباحثين عن خدماتك والاطلاع على خبراتك لمساعدتهم في اتخاذ القرار للتعاون معك في تقديم التدريب أو الاستشارات وهي مقسمة كما يلي :

                 </Text>

                        </View>
                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>
                            المعلومات الرئيسية :
                        </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                - المعلومات الشخصية : الاسم، الجنس، الجنسية، دولة الإقامة، مدينة الإقامة، الصفة .



                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                - المعلومات المهنية : مجال التدريب أو الاستشارات الرئيسي، جهة الاعتماد، أهم ثلاث دروات أو استشارات تقدمها، وبطاقتك المهنية .
                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                - وسائل التواصل : بريدك الإلكتروني، الجوال، كلمة السر، تحميل صورتك الشخصية أو شعارك .

                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                - الاشتراك : مدة الاشتراك 6 شهور أو سنة، الظهور في بداية البحث دوماً .
                            </Text>

                        </View>
                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>
                            المعلومات الثانوية :
                        </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                يمكنك إضافتها لاحقاً من خلال إدارة ملفك الشخصي بعد عملية التسجيل لتظهر في صفحتك :

                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                تويتر – الفيسبوك – سناب شات – لينكدإن – اليوتيوب – إنستغرام – تلغرام
                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                عليك بالضغط على الأيقونة التي تخص كل مواقعك في التواصل الاجتماعي لتفعيلها داخل التطبيق كما يمكنك توقيفها مرة أخرى من خلال الغاء التفعيل لأي من تلك المواقع أو جميعها ولكن جوالك المرتبط بالواتساب لا يمكن إلغاؤه بأي حال من الأحوال .
                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                الصورة الشخصية التي تضعها في نموذج التسجيل هي لتسهيل التعرف على شخصيتك من قبل الزوار والمتصفحين يمكنك تحميلها من خلال جهاز الهاتف أو التقاط الصورة بشكل مباشر من خلال كاميرا الهاتف إن أي صورة قد تضعها في حسابك الخاص تخل بالآداب العامة أو تتعرض للآخرين أو فيها تشويه لحقائق دينية أو سياسية أو تهجم سيتم إيقاف حسابك وحظره عن التطبيق بشكل نهائي بدون إنذار مسبق وسوف يتم إبلاغ السلطات المحلية عن تجاوزك للآداب العامة لاتخاذ الإجراءات المناسبة بحقك .
                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                في حال عدم إدراج صورة شخصية لملفك فإن إدارة التطبيق ستضع الصورة الافتراضية الخاصة بالتطبيق بناءً على الجنس المحدد من قبلك في طلب الانتساب للتطبيق .

                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                في كل مرة تريد الدخول إلى التطبيق يجب عليك إدخال بريدك الإلكتروني الذي سجلت من خلاله وكلمة السر الخاصة بك، في حال نسيان كلمة السر
                                عليك إعادتها من خلال أيقونة "نسيت كلمة السر؟" التي ستتيح لك إعادة تعيين كلمة سر جديدة للدخول إلى التطبيق .
                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                كما يمكنك دوماً الحفاظ على تسجيل الدخول من خلال الضغط على أيقونة "تذكرني" عند تسجيل الدخول "إذا أردت ذلك" والاطلاع على كل جديد بمجرد إعادة الضغط على أيقونة التطبيق في هاتفك .
                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                في حال حذف التطبيق من هاتفك والرغبة بإعادة تحميله مرة أخرى فإن كافة معلوماتك لن يتم حذفها ويمكنك الدخول بشكل تلقائي على التطبيق وخدماته
                                بعد تسجيل الدخول .
                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>


                                في حال عدم تجديد اشتراكك في التطبيق فإن كافة معلوماتك ستبقى موجودة كقاعدة بيانات خاصة بنا ويمكنك التصفح في التطبيق كزائر وليس كمقدم خدمة وعليه فإن عدم تجديد الاشتراك في التطبيق سوف يساهم في "عدم ظهورك" في البحث عن مجالك التدريبي أو الاستشاري .

                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                كل مرة ترغب بتجديد الاشتراك في التطبيق يمكنك ذلك بكل سهولة من خلال إدارة ملفك الشخصي .
                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                يظهر في إدارتك المدة التي اشتركت بها وعدد الأيام والتي ستتناقص بشكل يومي كل 24 ساعة لتبقى على اطلاع بالمدة المتبقية لك من الاشتراك، كما يمكنك زيادة أيام الاشتراك في أي وقت بحيث سيتم زيادة عدد الأيام الخاصة باشتراكك في التطبيق على المدة الأصلية النسجل بها سابقاً .
    ع
                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                عند اختيار وتسديد قيمة الاشتراك الخاص بك في التطبيق فإن حسابك سوف يتم تفعيله مباشرة من خلال رابط تأكيد الاشتراك على بردك الإلكتروني، عليك الضغط على الرابط لتفعيل حسابك واستخدام كافة المميزات الموجودة في التطبيق بحسب الفئة التي سجلت بها .

                            </Text>

                        </View>
                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>
                            ثالثاً : الإحصائيات
                        </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                ستظهر في إدارتك لملفك الإحصائيات لـ :
                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }} >
                                1) عدد ظهورك في عمليات البحث .
                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                2) التقييم الخاص من المستفيدين من خدماتك الذي سيوضح عدد الذين تواصلوا معك وقمت بتقديم الخدمة المطلوبة لهم بحيث سيكون هناك نموذج تقييم للعملاء لوضع الدرجة الخاصة بحودة الخدمة وهم على نوعين :

                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                * عملاء تواصلوا فقط بدون تقديم الخدمة .

                            </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }} >
                                * عملاء تواصلوا وحصلوا على الخدمة وهم من سيتم ارسال نموذج التقييم لهم : خدمة : - راضٍ جداً - راضِ - محايد - غير راضٍ - غير راضٍ أبداً
                            </Text>
                        </View>
                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>
                            - كيف نستخدم معلوماتك
                        </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                إن هدفنا الأساسي من جمع المعلومات هو أن نقدم لك تجربة محسنة عند استخدامك خدمتنا . ونستعمل هذه المعلومات كي نراقب عن كثب أكثر ميزات الخدمة استخداماً، وكذلك للسماح لك بمراجعة تاريخ خدماتك، والإطلاع على العروض الترويجية المتوفرة، وتقييم مقدمي الخدمات، ولتحديد الميزات التي تتطلب التطوير أكثر من غيرها، بما فيها أنماط الاستخدام والمواقع الجغرافية، ولتحديد الأماكن التي يجب أن تتركز فيها خدماتنا وميزاتنا، أو مصادرنا . نحن نستخدم المعلومات المتنوعة التي تم جمعها بحيث نستطيع تقديم النسخة المثلى من التطبيق وفقاً لنوع جهازك، وذلك مع استكشاف الأخطاء وإصلاحها، كما نستخدمها في بعض الأحيان لأغراض تسويقية .
                                وتستخدم عنوان بروتوكول الإنترنت الخاص بك IP للمساعدة في تشخيص مشاكلك مع الخادم الخاص بنا، وللمساعدة في إدارة التطبيق بشكل أفضل . ونستعمله كذلك لمساعدتنا في التعرف إليك، وجمع بيانات ديموغرافية واسعة النطاق . علماً أن هذا العنوان لا يحتوي على أي معلومات شخصية عنك .
                            </Text>

                        </View>
                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>
                            - الإشعارات المتعلقة بالخدمة
                        </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                سنرسل لك إشعارات متعلقة بالخدمة حصراً في الظروف التي نعتقد فيها بضرورة ذلك، مثل تعليق الخدمة مؤقتاً للصيانة، حيث سنعلمك بذلك عن طريق البريد الإلكتروني أيضاً .
                                ولا تستطيع عموماً إيقاف تلقي إشعارات من هذا النوع تتسم بطبيعتها غير الترويجية، إلا في حال أوقفت تفعيل حسابك أو انتهى اشتراكك ولم تقم بتجديده

                            </Text>
                        </View>
                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>
                            - خدمة العملاء
                        </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                سوف نرسل لك رسالة ترحيبية عبر الجوال أو عبر البريد الإلكتروني لتفعيل حسابك، كما سنتواصل معك عن طريق البريد الإلكتروني أو الهاتف لأمور تقييم خدماتك والردود على استفساراتك، وتزويدك بالخدمات التي تطلبها، ومن أجل إدارة حسابك .

                            </Text>
                        </View>
                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>
                            - الإعلان المستهدف أو السلوكي
                        </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                يعتمد الإعلان المستهدف ( الذي يعرف أيضاُ بالـ: "الإعلان السلوكي" ) على المعلومات التي يتم جمعها من عادات المستخدمين في التصفح، مثل الصفحات التي يزورونها أو عمليات البحث التي يجرونها، حيث نستخدم هذه المعلومات لمعرفة طبيعة الإعلانات ( المتعلقة ) التي يجب عرضها على المواقع الأخرى كي يراها فرد معيّن أو شريحة معيّنة .
                                ولن تشتمل على أي تفاصيل يمكن ربطها بشخص معيّن مثل الاسم أو العنوان أو أي معلومات شخصية .

                            </Text>
                        </View>
                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>
                            - إفصاحنا عن معلوماتك الشخصية
                        </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                لا نقوم ببيع أو تأجير أو مقايضة معلوماتك الشخصية أو معلومات موقعك الجغرافي، وإنما نستخدمها حصراً بالشكل المبيّن في سياسة الخصوصية هذه .
                                وقد يتشارك تطبيق خدمة المعلومات التي يتم تجميعها، والتي تشتمل على معلومات غير تعريفية وسجل بيانات، مع أطراف أخرى بغرض إجراء تحليلات تتعلق بالقطاع، أو التصنيف وإعداد البيانات الديموغرافية، أو إيصال إعلانات مستهدفة حول منتجات أو خدمات أخرى .
                                ونتعاون مع الجهات الحكومية والجهات المسؤولة بهدف تطبيق القانون والامتثال له . وبالتالي سوف نفصح عن أي معلومات تخصك إلى الحكومة أو الجهات المسؤولة عن تطبيق القانون أو الأطراف الخاصة إذا اعتقدنا وفقاً لتقديرنا الخاص – بأن ذلك ضروري أو مناسب للتعامل مع قضايا قانونية أو إجراءات قضائية (بما فيها – للذكر لا الحصر – مذكرات الاستدعاء)، أو لحماية حقوق طرف ثالث، أو لضمان الأمن العام أو أمن شخصّ معيّن، أو لمنع / إيقاف نشاط نعتبره غير قانوني، أو غير أخلاقي، أو قد يتسبب بملاحقة قضائية .
                                وفي حال أردنا الدخول في صفقة اندماج، أو استحواذ، أو بيع لكافة أصولنا أو بعضها فسوف نقوم بإعلامك عن طريق البريد الإلكتروني وجوالك مع إشعار واضح ولافت على الصفحة الرئيسية للتطبيق بخصوص أي تغيير في الملكية أو أي استخدام محتمل لمعلوماتك الشخصية، فضلاً عن أي خيارات قد تكون لديك بخصوص معلوماتك الشخصية .
                                كما قد نلجأ إلى مزوّد من طرف ثالث ليستضيف قسم الدعم الخاص بموقعنا، ولكن ستكون المعلومات التي يتم جمعها ضمن هذا القسم من الموقع محكومة بسياسة الخصوصية التي ننتهجها نحن، ولن يكون الوصول إليها متاحاً للمزوّد .

                            </Text>
                        </View>
                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>
                            - الوصول إلى المعلومات الشخصية
                        </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                في حال طرأ أي تغيير على معلوماتك الشخصية، أو لم تعد ترغب بالاستفادة من خدماتنا، فبإمكانك تصحيح المعلومات، أو حذف أي أخطاء فيها، أو تعديلها عن طريق صفحة معلومات الأعضاء أو عبر مراسلتنا على البريد الإلكتروني : info@almodarrebalarabi.com – لنساعدك على تنفيذ رغباتك .

                            </Text>
                        </View>
                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>>
                        - الأمن
                        </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>

                                نخزّن كافة المعلومات الشخصية المُعرِّفة بالأشخاص ومعلومات المواقع الجغرافية بشكل آمن ضمن قاعدة بياناتنا، ونحرص على حمايتها باتباع الممارسات الأمنية المعقولة تجارياً والمتعارف عليها بشكلٍ واسع في القطاع (مثل الترميز، والجدران النارية، وطبقات المقابس الآمنة) . لكن بالمقابل، نشير إلى أنه لا يوجد نظام أمن معلومات عصي على الاختراق بالكامل مهما بلغت قوة مواصفاته التكنولوجية وإجراءاته الترميزية . وبالتالي لن نستطيع ضمان أمن قاعدة بياناتنا، أو ضمان عدم اختراق معلوماتك أثناء إرسالها عبر الإنترنت، لذلك فإن أي معلومات تقوم بإرسالها تكون على مسؤوليتك الشخصية . وننصحك بعدم الإفصاح عن كلمة المرور الخاصة بك لأي كان .

                            </Text>

                        </View>
                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>
                            - دعوة الأصدقاء
                        </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>


                                يمكنك دعوة أصدقاءك للإنضمام إلى التطبيق عبر أيقونة (دعوة صديق) الموجودة في إدارتك ويمكنك دعمة عدد لا نهائي من الأصدقاء حيث سيدخل هذا في تقييم نشاطك ودعمك للتطبيق وحصولك على بعض المميزات لاحقاً على سبيل المثال لا الحصر عند دعوة 100 صديق انضموا للتطبيق من خلال دعوتك ستحصل على اشتراك مجاني لمدة ستة شهور إضافية وغيرها من الخدمات لاحقاً بما يتوافق مع سياسة التطوير والعمل للتطبيق .

                            </Text>
                        </View>
                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>
                            - التعديلات في سياسة الخصوصية

                        </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                قد نضطر إلى تحديث هذه السياسة بحيث تعكس أي تغييرات قد تطرأ على ممارساتنا بخصوص المعلومات . وفي حال أردنا إجراء تغييرات جذرية، فسوف نقوم بإعلامك عن طريق البريد الإلكتروني (نرسلها إلى العنوان المذكور في حسابك)، أو عن طريق نشر إشعار مسبق على الصفحة الرئيسية للتطبيق وذلك قبل تفعيل هذه التغييرات . وندعوك في جميع الأحوال إلى مطالعة هذه الصفحة بشكل دوري للحصول على آخر المعلومات المتعلقة بممارسات الخصوصية .

                            </Text>
                        </View>
                        <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '5%' }}>
                            رابعاً : شروط الانضمام للتطبيق
                </Text>
                        <View>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                التطبيق يستهدف النخبة والمتميزين في "مجتمع التدريب والإستشارات" ويجب على مزودي الخدمة تزويد إدارة التطبيق بما يلي :
                </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                1) الاسم الثلاثي الحقيقي إما باللغة العربية أو اللغات الفرنسية أو الإنكليزية، سيتم رفض أية أسماء وهمية .
                </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                2) مجال التدريب / مجال الاستشارات الرئيسي .
                </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                3) جهة الاعتماد في التدريب أو الاستشارات .
                </Text>

                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                4) أهم ثلاثة برامج تدريبية تقدمها / أهم ثلاثة استشارات دقيقة تقدمها .
                </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                5) تصميم بطاقتك المهنية / الخدمية .
                </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                6) ربما تطلب إدارة التطبيق الوثائق الخاصة بذلك من خلال التواصل معك عبر البريد الإلكتروني من أجل المصداقية .
                </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                7) دفع الرسوم المالية المتوجبة بحسب فئة الاشتراك لتفعيل الاشتراك .
                </Text>
                            <Text style={{ color: Colors.white, marginLeft: '2%', marginTop: '2%' }}>
                                8) لا تتحمل إدارة التطبيق أية تبعات مالية أو قانونية في حال نشوء خلافات بين مزودي الخدمة والزوار وهي تقع على عاتق مزودي الخدمة بشكل مباشر .
                
                
                
                </Text>
                        </View>

                    </ScrollView>
                </Content>



            </Container>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? '10%' : 0,
        backgroundColor: Colors.lightBlue,
        justifyContent: 'flex-start',
    },
    orText: {
        alignSelf: 'center', color: Colors.white, fontSize: 18
    },
    centerContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },

    signUpButton: {
        backgroundColor: Colors.red,
        marginRight: '10%',
        width: '30%',
        height: '4%',
        alignSelf: I18nManager.isRTL ? 'flex-end' : 'flex-start',

    },
    registerContainer: {
        flex: 0.2, marginTop: '10%', flexDirection: 'row', justifyContent: 'space-around'
    },
    input: {
        height: 40,
        backgroundColor: Colors.white,
        textAlign: 'center',
    },
    rowContainer: {
        flexDirection: 'row', justifyContent: 'space-around', flex: 0.2, marginTop: '8%'
    },
    signUpText:
    {
        paddingLeft: '10%',
        color: Colors.white
    },
    trainingCenterCardItem: {
        color: 'orange',
        textAlign: 'center',
        flex: 1
    },
    welcomeText: {
        fontSize: 15,
        color: Colors.white,
        flex: 0.2,
    },
    welcomeTextContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rememberMeText: {
        textAlign: I18nManager.isRTL ? 'left' : 'right',
        marginRight: '20%',
        color: Colors.white
    },
    joinUsButton: {
        backgroundColor: 'red',
        width: 90,
        alignSelf: 'center'
    },
    imageLogo: {
        height: '2%',
        flex: 0.1,

    },
    contentContainer: {
        flex: 0.2, flexDirection: 'row', justifyContent: 'center'
    },
    inputContainer: {
        flex: 0.7, justifyContent: 'space-between'
    },
    orContainer: {
        flex: 0.2, justifyContent: 'center', alignItems: 'center'
    }

})