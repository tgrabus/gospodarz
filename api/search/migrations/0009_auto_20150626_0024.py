# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('search', '0008_auto_20150604_2026'),
    ]

    operations = [
        migrations.RenameField(
            model_name='localization',
            old_name='cosXRad',
            new_name='cos_latitude',
        ),
        migrations.RenameField(
            model_name='localization',
            old_name='cosYRad',
            new_name='cos_longitude',
        ),
        migrations.RenameField(
            model_name='localization',
            old_name='positionX',
            new_name='latitude',
        ),
        migrations.RenameField(
            model_name='localization',
            old_name='positionY',
            new_name='longitude',
        ),
        migrations.RenameField(
            model_name='localization',
            old_name='sinXRad',
            new_name='sin_latitude',
        ),
        migrations.RenameField(
            model_name='localization',
            old_name='sinYRad',
            new_name='sin_longitude',
        ),
        migrations.RemoveField(
            model_name='localization',
            name='city',
        ),
    ]
